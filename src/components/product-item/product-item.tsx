import classNames from 'classnames';
import styles from './product-item.module.scss';

export interface ProductItemProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ProductItem = ({ className }: ProductItemProps) => {
    return (
        <div className={classNames(styles.root, className, styles.flex)}>
            <img
                src="https://static.wixstatic.com/media/9b4a09_974d42052a2e4237b5b7bbadcf5b9a70~mv2.png/v1/fill/w_892,h_714,al_c,q_90,enc_auto/9b4a09_974d42052a2e4237b5b7bbadcf5b9a70~mv2.png"
                className={styles.productimage}
            />
            <div className={styles.details}>
                <div className={styles.productname}>ProductItem</div>
                <div className={styles.price}>25$</div>
                <button className={styles.button}>Buy Now</button>
            </div>
        </div>
    );
};
