import { FC } from 'react';

/* 
  mi componente boton debe tener estados: 
    - disabled, active, hover, click, loading
*/

interface ButtonPrimaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  isLoading?: boolean;
}

const getStateStyles = new Map<string, string>([
  ['disabled', 'rounded-sm border-1 max-w-60 h-9 bg-slate-400 text-white border-slate-400'],
  ['loading', 'rounded-sm border-1 max-w-60 h-9'],
  [
    'neutral',
    'rounded-sm border-1 max-w-60 h-9 bg-blue-400 hover:bg-blue-500 text-white border-blue-400 cursor-pointer',
  ],
  ['clicked', 'rounded-sm border-1 max-w-60 h-9'],
]);

const ButtonPrimary: FC<ButtonPrimaryProps> = ({ children, isLoading, disabled, ...rest }) => {
  const getState = () => {
    if (isLoading || disabled) {
      return getStateStyles.get('disabled');
    }
    return getStateStyles.get('neutral');
  };

  return (
    <button className={getState()} type="button" disabled={disabled || isLoading} {...rest}>
      {isLoading ? 'is loading' : children}
    </button>
  );
};

export default ButtonPrimary;
