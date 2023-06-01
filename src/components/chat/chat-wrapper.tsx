import {Chat} from './chat'
import {ChatMessage, AvatarMessage} from '../types'
import {AvatarMessageView} from '../avatar-message/avatar-message'
import {UserMessageView} from '../user-message/user-message'



export const WrappedChat = ({messages}: {messages:Array<AvatarMessage>})=>{
    return <Chat messages={messages} views={{
        [AvatarMessageView.kind]: AvatarMessageView,
        [UserMessageView.kind]: UserMessageView
    }}/>
}