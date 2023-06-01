import classNames from 'classnames';
import styles from './chat-input.module.scss';
import { ChatIcons } from '../chat-icons/chat-icons';

export interface ChatInputProps {
    className?: string;
    sendText: () => void;
    text: string;
    onTextChange: (text: string) => void;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ChatInput = ({ className, sendText, onTextChange, text }: ChatInputProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.DivInput}>
                <input
                    placeholder="Send me a massage"
                    className={styles.input}
                    value={text}
                    onChange={(ev) => onTextChange(ev.target.value)}
                    onSubmit={sendText}
                />
            </div>
            <ChatIcons onClick={sendText} />
        </div>
    );
};
