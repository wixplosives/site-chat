import classNames from 'classnames';
import styles from './user-message.module.scss';
import { MessageView, UserMessage } from '../types';
import AvatarMessage_module from '../avatar-message/avatar-message.module.scss';
import { Avatar } from '../avatar/avatar';
export interface UserMessageProps {
    className?: string;
    message: UserMessage;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const UserMessageComp = ({ className, message }: UserMessageProps) => {
    return (
        <div className={classNames(styles.root, className, styles.flex, styles['margin-bottom'])}>
            <div className={AvatarMessage_module['chat-message']}>{message.text}</div>
            <Avatar />
        </div>
    );
};

export const UserMessageView: MessageView<UserMessage> = {
    kind: 'user-message',
    Comp: UserMessageComp,
};
