import classNames from 'classnames';
import styles from './chat-input.module.scss';

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
            <input placeholder="dfdfdfdf" className={styles.input} />
        </div>
    );
};
