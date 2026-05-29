/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'react';
import * as THREE from 'three';

// Export the ref type for the parent to use
export interface TalkingHeadRef {
  speak: (text: string) => void;
}

const TalkingHeadAvatar = forwardRef<TalkingHeadRef, object>((_props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Expose the speak method to parent components
  useImperativeHandle(ref, () => ({
    speak: (text: string) => {
      if (headRef.current) {
        console.log(`TalkingHead speaking: "${text}"`);
        headRef.current.speakText(text);
      } else {
        console.warn('TalkingHead not initialized yet');
      }
    }
  }));

  useEffect(() => {
    let isActive = true;

    const initTalkingHead = async () => {
      if (!containerRef.current) return;

      try {
        // Dynamic import to handle potential load errors gracefully
        const module = await import('../lib/TalkingHead/talkinghead.mjs');
        const TalkingHead = module.default || module.TalkingHead;

        if (!TalkingHead) {
          throw new Error('TalkingHead class not found in module');
        }

        // Initialize TalkingHead
        // Based on the library, it takes (node, options)
        headRef.current = new TalkingHead(containerRef.current, {
          cameraView: 'upper', // Targets upper body
          cameraDistance: 1.2, // Move back for mid-shot portrait
          cameraY: 0.2, // Offset to center the upper body correctly
          cameraRotateX: 0.05, // Slight tilt for natural look
          modelRoot: 'Armature',
          dracoEnabled: false,
          lightAmbientIntensity: 2.5, // Softer lighting
          lightDirectIntensity: 2.5,
          lipsyncLang: 'en', // Set to English for the test
        });

        // Load the avatar
        await headRef.current.showAvatar({
          url: '/assets/avatars/avaturn.glb',
          body: 'F',
          avatarMood: 'neutral'
        }, (event: ProgressEvent) => {
          if (event && event.lengthComputable) {
            const percent = Math.round((event.loaded / event.total) * 100);
            console.log(`Loading avatar: ${percent}%`);
          }
        });

        if (isActive) {
          setLoading(false);
          console.log('TalkingHead initialized successfully');
        }
      } catch (err: any) {
        console.error('TalkingHead initialization failed:', err);
        setError(err.message || 'Unknown error');
        setLoading(false);
        
        // If TalkingHead fails, we fallback to a simple Three.js loader
        initFallback();
      }
    };

    const initFallback = () => {
      if (!containerRef.current) return;
      console.log('Initializing Three.js fallback...');

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      containerRef.current.appendChild(renderer.domElement);

      const light = new THREE.AmbientLight(0xffffff, 2);
      scene.add(light);
      const dirLight = new THREE.DirectionalLight(0xffffff, 2);
      dirLight.position.set(5, 5, 5);
      scene.add(dirLight);

      import('three/addons/loaders/GLTFLoader.js').then(({ GLTFLoader }) => {
        const loader = new GLTFLoader();
        loader.load('/assets/avatars/avaturn.glb', (gltf: any) => {
          scene.add(gltf.scene);
          
          // Center the model
          const box = new THREE.Box3().setFromObject(gltf.scene);
          const center = box.getCenter(new THREE.Vector3());
          gltf.scene.position.sub(center);
          
          // Adjust camera
          camera.position.z = 2;
          
          const animate = () => {
            if (!isActive) return;
            requestAnimationFrame(animate);
            gltf.scene.rotation.y += 0.005;
            renderer.render(scene, camera);
          };
          animate();
        }, undefined, (error: any) => {
          console.error('Fallback GLB load error:', error);
        });
      });

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        renderer.dispose();
      };
    };

    initTalkingHead();

    return () => {
      isActive = false;
      if (headRef.current && typeof headRef.current.dispose === 'function') {
        headRef.current.dispose();
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="talking-head-container"
      style={{ 
        width: '100vw', 
        height: '100vh', 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        zIndex: 5,
        pointerEvents: 'none' // Let clicks pass through to background/widget
      }}
    >
      {loading && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>
          Loading Avatar...
        </div>
      )}
      {error && (
        <div style={{ position: 'absolute', top: '10px', right: '10px', color: 'rgba(255,0,0,0.5)', fontSize: '10px' }}>
          TalkingHead Error: {error} (Using Fallback)
        </div>
      )}
    </div>
  );
});

export default TalkingHeadAvatar;
