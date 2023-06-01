import { Chat } from './chat';
import { ChatMessage, AvatarMessage } from '../types';
import { AvatarMessageView } from '../avatar-message/avatar-message';
import { UserMessageView } from '../user-message/user-message';
import { useState } from 'react';

export const WrappedChat = <T extends ChatMessage>({ messages }: { messages: Array<T> }) => {
    const [currentMessages, setMessages] = useState(messages);
    const [status, setStatus] = useState<'loading' | 'idle'>('idle');
    return (
        <Chat
            status={status}
            messages={currentMessages}
            views={{
                [AvatarMessageView.kind]: AvatarMessageView,
                [UserMessageView.kind]: UserMessageView,
            }}
            onUserMessage={(text) => {
                const withUserMessage = [
                    ...currentMessages,
                    {
                        kind: 'user-message',
                        text,
                    } as any,
                ];
                setMessages(withUserMessage);
                setStatus('loading');
                sendMessage(text).then((res) => {
                    setMessages([
                        ...withUserMessage,
                        {
                            kind: 'avatar-message',
                            text: res.message,
                        } as any,
                    ]);
                });
                setStatus('idle');
            }}
        />
    );
};

export const sendMessage = async (text: string) => {
    const res = await fetch('http://localhost:3000/search?q=' + text);
    return res.json();
};
