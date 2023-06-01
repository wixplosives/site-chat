import { createBoard } from '@wixc3/react-board';
import { ChatIcons } from '../../../components/chat-icons/chat-icons';

export default createBoard({
    name: 'ChatIcons',
    Board: () => <ChatIcons />
});
