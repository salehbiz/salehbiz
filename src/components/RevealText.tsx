import React from 'react';

interface RevealTextProps {
  text: string;
  className?: string;
  delayOffset?: number;
  delayIncrement?: number;
}

export const RevealText: React.FC<RevealTextProps> = ({ 
  text, 
  className = '', 
  delayOffset = 0,
  delayIncrement = 0.05
}) => {
  const lines = text.split('\n');
  let wordCount = 0;

  return (
    <span className={`reveal-text-container ${className}`}>
      {lines.map((line, lineIdx) => {
        const words = line.split(' ');
        return (
          <React.Fragment key={lineIdx}>
            {words.map((word, wordIdx) => {
              const currentDelay = delayOffset + wordCount * delayIncrement;
              // Only increment word count if it's an actual word to avoid empty span delays
              if (word.length > 0) {
                wordCount++;
              }
              
              return (
                <span
                  key={wordIdx}
                  className="reveal-word"
                  style={{ animationDelay: `${currentDelay}s` }}
                >
                  {word}{wordIdx < words.length - 1 ? '\u00A0' : ''}
                </span>
              );
            })}
            {lineIdx < lines.length - 1 && <br />}
          </React.Fragment>
        );
      })}
    </span>
  );
};

export default RevealText;
