import { createBoard } from '@wixc3/react-board';
import { AvatarMessageComp } from '../../../components/avatar-message/avatar-message';

export default createBoard({
    name: 'AvatarMessage',
    Board: () => (
        <AvatarMessageComp
            message={{
                kind: 'avatar-message',
                text: 'Hi user'
            }}
        />
    ),
});
