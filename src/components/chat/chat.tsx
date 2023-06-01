import classNames from 'classnames';
import styles from './chat.module.scss';
import { ChatMessage, MessageView } from '../types';

export interface ChatProps {
    className?: string;
    messages: ChatMessage[];
    views: Record<string, MessageView<any>>;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Chat = ({ className, views, messages }: ChatProps) => {
    return (
        <div className={classNames(styles.root, className)}>
           {messages.map((msg, idx)=>{
                const View = views[msg.kind]?.Comp || DefaultMessage.Comp;
            return <View key={idx} message={msg} />
           })}
        </div>
    );
};


export const DefaultMessage: MessageView<ChatMessage> = {
    Comp:
    ({message})=><div>view not found for message of kind {message.kind}</div>,
    kind: 'default'}