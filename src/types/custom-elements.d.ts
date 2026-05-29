/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        'elevenlabs-convai': React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement> & {
            'agent-id'?: string;
          },
          HTMLElement
        >;
      }
    }
  }
}
