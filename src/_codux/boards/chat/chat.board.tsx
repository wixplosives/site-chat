import { createBoard } from '@wixc3/react-board';
import { WrappedChat } from '../../../components/chat/chat-wrapper';

export default createBoard({
    name: 'Chat',
    Board: () => <WrappedChat messages={[]} />,
    environmentProps: {
        canvasWidth: 829,
    },
});
