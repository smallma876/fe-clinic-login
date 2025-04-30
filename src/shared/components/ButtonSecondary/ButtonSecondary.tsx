import { FC } from 'react';
interface ButtonSecondaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

const ButtonSecondary: FC<ButtonSecondaryProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <button className="rounded-sm border-1 border-blue-400 h-9 max-w-60 bg-white text-blue-400" type="button" {...rest}>
      {children}
    </button>
  );
};

export default ButtonSecondary;
