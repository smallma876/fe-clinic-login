import { FC, HTMLAttributes } from 'react';
import styles from './card-menu.module.css';

interface CardMenuProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
}

const CardMenu: FC<CardMenuProps> = (props) => {
  const { label, ...rest } = props;

  return (
    <button type="button" className={styles.cardMenu} {...rest}>
      <img src="/document.svg" />
      <div>{label}</div>
      <img src="/chevron-right.svg" />
    </button>
  );
};

export default CardMenu;
