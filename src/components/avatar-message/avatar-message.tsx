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
            <Avatar src="https://static.wixstatic.com/media/ee0e97_3371e9dac6ca4fae8bee535d3cd49ebe~mv2.png/v1/fill/w_848,h_1200,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/ee0e97_3371e9dac6ca4fae8bee535d3cd49ebe~mv2.png" />
            <div className={styles['chat-message']}>{message.text}</div>
        </div>
    );
};

export const AvatarMessageView: MessageView<AvatarMessage> = {
    kind: 'avatar-message',
    Comp: AvatarMessageComp,
};
