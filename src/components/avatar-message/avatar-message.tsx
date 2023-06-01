import classNames from 'classnames';
import styles from './avatar-message.module.scss';
import { MessageView, AvatarMessage } from '../types';
import { Avatar } from '../avatar/avatar';
import UserMessage_module from '../user-message/user-message.module.scss';
export interface AvatarMessageProps {
    className?: string;
    message: AvatarMessage;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AvatarMessageComp = ({ className, message }: AvatarMessageProps) => {
    return (
        <div
            className={classNames(
                styles.root,
                className,
                styles.flex,
                UserMessage_module['margin-bottom']
            )}
        >
            <Avatar />
            <div className={styles['chat-message']}>{message.text}</div>
        </div>
    );
};

export const AvatarMessageView: MessageView<AvatarMessage> = {
    kind: 'avatar-message',
    Comp: AvatarMessageComp,
};
