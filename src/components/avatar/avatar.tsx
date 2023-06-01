import classNames from 'classnames';
import styles from './avatar.module.scss';

export interface AvatarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Avatar = ({ className }: AvatarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src="https://thumbs.dreamstime.com/b/d-icon-avatar-cartoon-hipster-character-stylish-smiling-man-beard-phone-close-up-portrait-isolated-transparent-png-274422089.jpg"
                className={styles.avatar}
            />
        </div>
    );
};
