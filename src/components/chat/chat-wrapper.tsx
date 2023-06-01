import { Chat } from './chat';
import { ChatMessage, AvatarMessage } from '../types';
import { AvatarMessageView } from '../avatar-message/avatar-message';
import { UserMessageView } from '../user-message/user-message';
import { useState } from 'react';

export const WrappedChat = <T extends ChatMessage>({ messages }: { messages: Array<T> }) => {
    const [currentMessages, setMessages] = useState(messages);
    return (
        <Chat
            messages={currentMessages}
            views={{
                [AvatarMessageView.kind]: AvatarMessageView,
                [UserMessageView.kind]: UserMessageView,
            }}
            onUserMessage={(text) =>
                setMessages([
                    ...currentMessages,
                    {
                        kind: 'user-message',
                        text,
                    } as any,
                ])
            }
        />
    );
};
