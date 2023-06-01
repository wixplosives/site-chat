import classNames from 'classnames';
import styles from './chat-input.module.scss';
import { ChatIcons } from '../chat-icons/chat-icons';

export interface ChatInputProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ChatInput = ({ className }: ChatInputProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.DivInput}>
                <input placeholder="Send me a massage" className={styles.input} />
                
            </div>
            <ChatIcons />
        </div>
    );
};
