import { createBoard } from '@wixc3/react-board';
import { WrappedChat } from '../../../components/chat/chat-wrapper';

export default createBoard({
    name: 'Chat',
    Board: () => (
        <WrappedChat
            messages={[
                {
                    kind: 'avatar-message',
                    text: 'hello user',
                },
                {
                    kind: 'avatar-message',
                    text: 'some text',
                },
            ]}
        />
    ),
});
