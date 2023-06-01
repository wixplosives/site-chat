import { createBoard } from '@wixc3/react-board';
import { ProductItem } from '../../../components/product-item/product-item';

export default createBoard({
    name: 'ProductItem',
    Board: () => <ProductItem />,
    environmentProps: {
        canvasWidth: 212,
        canvasHeight: 370,
    },
});
