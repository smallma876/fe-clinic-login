import { FC } from 'react';
import styles from './buttonprimary.module.css';

interface ButtonPrimaryProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
  isLoading?: boolean;
}

const ButtonPrimary: FC<ButtonPrimaryProps> = (props) => {
  const { children, isLoading, ...rest } = props;

  return (
    <button className={styles.buttonprimary} type="button" {...rest}>
      {isLoading ? 'is loading' : children}
    </button>
  );
};

export default ButtonPrimary;
