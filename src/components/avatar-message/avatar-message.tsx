import classNames from 'classnames';
import styles from './avatar-message.module.scss';
import { MessageView, AvatarMessage} from '../types'
export interface AvatarMessageProps {
    className?: string;
    message: AvatarMessage
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AvatarMessageComp = ({ className, message }: AvatarMessageProps) => {
    return <div className={classNames(styles.root, className)}>{message.text}</div>;
};


export const AvatarMessageView: MessageView<AvatarMessage> = {
    kind: 'avatar-message',
    Comp: AvatarMessageComp
}