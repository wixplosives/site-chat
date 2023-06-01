import classNames from 'classnames';
import styles from './chat-icons.module.scss';
import ChatInput_module from '../chat-input/chat-input.module.scss';

export interface ChatIconsProps {
    className?: string;
    onClick?: () => void;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ChatIcons = ({ className, onClick }: ChatIconsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div></div>
            <img
                onClick={onClick}
                src="   https://cdn-icons-png.flaticon.com/512/786/786205.png "
                className={styles.AddImage}
            />
        </div>
    );
};
