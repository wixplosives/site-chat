import React from 'react';
import ReactDOM from 'react-dom/client';
import { WrappedChat } from './components/chat/chat-wrapper';
import './index.css';
import { ChatMessage, UserMessage } from './components/types';
import retargetEvents from 'react-shadow-dom-retarget-events';
export default class Chat extends HTMLElement {
    mountPoint: HTMLDivElement | undefined;
    messages: ChatMessage[] = [];
    root: ReactDOM.Root | undefined;
    connectedCallback() {
        this.mountPoint = document.createElement('div');
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(this.mountPoint);

        const messages = this.getAttribute('messages');
        this.root = ReactDOM.createRoot(this.mountPoint);
        this.root.render(this.createChat(messages ? JSON.parse(messages) : []));
        retargetEvents(shadowRoot);
    }
    createChat(messages: ChatMessage[]) {
        return <WrappedChat messages={messages} />;
    }
    static get observedAttributes() {
        return ['title'];
    }
    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (name === 'title' && this.root) {
            this.root.render(this.createChat(JSON.parse(newValue)));
        }
    }
}

customElements.define('site-chat', Chat);
