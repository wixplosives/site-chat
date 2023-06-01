/// <reference types="vite/client" />

declare module '*.svg' {
    import * as React from 'react';

    export const ReactComponent: React.FunctionComponent<
        React.ComponentProps<'svg'> & { title?: string }
    >;
    export default ReactComponent;
}

declare module 'react-shadow-dom-retarget-events' {
    export const retargetEvents: (el: ShadowRoot) => void;
    export default retargetEvents;
}
