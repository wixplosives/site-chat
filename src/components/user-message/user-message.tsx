import classNames from 'classnames';
import styles from './user-message.module.scss';
import { MessageView, UserMessage} from '../types'
export interface UserMessageProps {
    className?: string;
    message: UserMessage
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const UserMessageComp = ({ className, message }: UserMessageProps) => {
    return <div className={classNames(styles.root, className)}>{message.text}</div>;
};


export const UserMessageView: MessageView<UserMessage> = {
    kind: 'user-message',
    Comp: UserMessageComp
}