import React, { useRef, useState, useCallback } from 'react';
import './AriaPage.css';
import ElevenLabsWidget from '../components/ElevenLabsWidget';
// TalkingHeadAvatar is disabled for the Pseudo Tavus demo.
// To re-enable, uncomment the import and usage below.
// import TalkingHeadAvatar from '../components/TalkingHeadAvatar';
// import type { TalkingHeadRef } from '../components/TalkingHeadAvatar';

const ARIA_SPEECH_TEXT =
  "Hi, I'm Aria. I help visitors understand Dr. Usman's services and guide them to the right next step.";

const AriaPage: React.FC = () => {
  // const talkingHeadRef = useRef<TalkingHeadRef>(null); // Disabled for Pseudo Tavus demo
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const blinkIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Blink simulation — toggles a CSS class on/off at randomish intervals
  const startBlinking = useCallback(() => {
    const doBlink = () => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 180); // blink duration
    };
    // Immediate first blink after a beat
    const firstDelay = setTimeout(doBlink, 600);
    const interval = setInterval(() => {
      doBlink();
    }, 2800 + Math.random() * 2000); // every 2.8–4.8s

    blinkIntervalRef.current = interval;
    return () => {
      clearTimeout(firstDelay);
      clearInterval(interval);
    };
  }, []);

  const stopBlinking = useCallback(() => {
    if (blinkIntervalRef.current) {
      clearInterval(blinkIntervalRef.current);
      blinkIntervalRef.current = null;
    }
    setIsBlinking(false);
  }, []);

  const handleTestAria = useCallback(() => {
    if (isSpeaking) return; // prevent double-tap

    // Try browser SpeechSynthesis
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(ARIA_SPEECH_TEXT);
      utterance.rate = 0.95;
      utterance.pitch = 1.05;
      utterance.volume = 1;

      // Pick a nice female voice if available
      const voices = window.speechSynthesis.getVoices();
      const preferred = voices.find(
        (v) =>
          v.name.includes('Samantha') ||
          v.name.includes('Karen') ||
          v.name.includes('Google UK English Female') ||
          v.name.includes('Female')
      );
      if (preferred) utterance.voice = preferred;

      utterance.onstart = () => {
        setIsSpeaking(true);
        startBlinking();
      };
      utterance.onend = () => {
        setIsSpeaking(false);
        stopBlinking();
      };
      utterance.onerror = () => {
        setIsSpeaking(false);
        stopBlinking();
      };

      window.speechSynthesis.cancel(); // clear queue
      window.speechSynthesis.speak(utterance);
    } else {
      // Fallback: just show speaking state for a few seconds
      setIsSpeaking(true);
      startBlinking();
      setTimeout(() => {
        setIsSpeaking(false);
        stopBlinking();
      }, 5000);
    }
  }, [isSpeaking, startBlinking, stopBlinking]);

  return (
    <div className="aria-page-container">
      {/* Full-screen Studio Background */}
      <div className="aria-background" />

      {/* Subtle ambient particles / light overlay */}
      <div className="aria-ambient-overlay" />

      {/* =============================================
          TalkingHeadAvatar — DISABLED for Pseudo Tavus demo.
          To re-enable:
            1. Uncomment the import at the top of this file.
            2. Uncomment the line below.
            3. Uncomment talkingHeadRef.
          ============================================= */}
      {/* <TalkingHeadAvatar ref={talkingHeadRef} /> */}

      {/* ============ Pseudo Tavus Portrait ============ */}
      <div className={`aria-portrait-wrapper ${isSpeaking ? 'speaking' : ''}`}>
        {/* Soft glow ring (visible when speaking) */}
        <div className="aria-glow-ring" />

        <div className={`aria-portrait ${isBlinking ? 'blink' : ''}`}>
          <img
            src="/assets/images/aria_portrait.png"
            alt="Aria — AI Assistant"
            draggable={false}
          />
          {/* Blink overlay */}
          <div className="aria-blink-overlay" />
        </div>

        {/* Speaking indicator */}
        {isSpeaking && (
          <div className="aria-speaking-indicator">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="label">Speaking…</span>
          </div>
        )}
      </div>

      {/* Branding / name tag */}
      <div className="aria-nametag">
        <span className="aria-nametag-name">Aria</span>
        <span className="aria-nametag-role">AI Assistant</span>
      </div>

      {/* Test Aria Button */}
      <div className="aria-test-controls">
        <button
          className="test-voice-btn"
          onClick={handleTestAria}
          disabled={isSpeaking}
        >
          {isSpeaking ? '● Speaking…' : '▶ Test Aria'}
        </button>
      </div>

      {/* ElevenLabs Widget Container — positioned bottom center */}
      <div className="aria-widget-bottom-center">
        <ElevenLabsWidget />
      </div>
    </div>
  );
};

export default AriaPage;
