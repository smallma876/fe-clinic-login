import { FC } from 'react';
import styles from './buttonsecondary.module.css';

interface ButtonSecondaryProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
}

const ButtonSecondary: FC<ButtonSecondaryProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <button className={styles.buttonsecondary} type="button" {...rest}>
      {children}
    </button>
  );
};

export default ButtonSecondary;
