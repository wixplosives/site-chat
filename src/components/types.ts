export interface ChatMessage{
    kind: string;
}


export interface UserMessage extends ChatMessage{
    kind: 'user-message',
    text: string
}



export interface AvatarMessage extends ChatMessage{
    kind: 'avatar-message',
    text: string
}


export interface MessageView<T extends ChatMessage>{
    kind: T['kind'],
    Comp: React.ComponentType<{message: T}>
} 