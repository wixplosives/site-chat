import classNames from 'classnames';
import styles from './chat.module.scss';
import { ChatMessage, MessageView } from '../types';
import { useState } from 'react';
export interface ChatProps {
    className?: string;
    messages: ChatMessage[];
    views: Record<string, MessageView<any>>;
    onUserMessage?: (text: string) => void;
    status: 'idle' | 'loading';
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Chat = ({ className, views, messages, onUserMessage, status }: ChatProps) => {
    const [text, setText] = useState('');
    return (
        <div className={classNames(styles.root, className)}>
            {messages.map((msg, idx) => {
                const View = views[msg.kind]?.Comp || DefaultMessage.Comp;
                return <View key={idx} message={msg} />;
            })}
            <div>
                <textarea value={text} onChange={(ev) => setText(ev.target.value)}></textarea>
                <button
                    disabled={status === 'loading'}
                    onClick={() => {
                        if (status !== 'idle') {
                            return;
                        }
                        onUserMessage?.(text);
                        setText('');
                    }}
                >
                    Button
                </button>
            </div>
        </div>
    );
};

export const DefaultMessage: MessageView<ChatMessage> = {
    Comp: ({ message }) => <div>view not found for message of kind {message.kind}</div>,
    kind: 'default',
};
