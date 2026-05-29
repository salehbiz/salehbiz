import React, { useEffect } from 'react';

/**
 * ElevenLabsWidget Component
 * 
 * This component integrates the ElevenLabs Conversational AI widget.
 * It loads the necessary script and renders the custom element.
 */
const ElevenLabsWidget: React.FC = () => {
  useEffect(() => {
    // Unique ID for the script to prevent multiple loads
    const SCRIPT_ID = 'elevenlabs-convai-widget-script';
    
    // Check if script already exists in the document
    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
      script.async = true;
      script.type = 'text/javascript';
      
      // Error handling for script loading
      script.onerror = () => {
        console.error('Failed to load ElevenLabs Conversational AI widget script.');
      };

      document.body.appendChild(script);
    }
  }, []);

  return (
    <div 
      className="elevenlabs-widget-wrapper" 
      style={{ 
        position: 'fixed', 
        bottom: '40px', 
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      {/* ElevenLabs Custom Element */}
      <elevenlabs-convai agent-id="agent_0101kpy88cvnfc0babxset5xtm0m"></elevenlabs-convai>
    </div>
  );
};

export default ElevenLabsWidget;
