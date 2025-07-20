import { ErrorUIField } from '@/domain/error.interface';
import { FC, ReactNode, SelectHTMLAttributes } from 'react';

interface SelectorProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
  value?: string;
  error?: ErrorUIField;
  label?: string;
}

const Selector: FC<SelectorProps> = ({ label, id, value, children, error, ...rest }) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={id}>{label}</label>
      <select
        className="rounded-sm border-1 border-gray-700 h-9 outline-none p-2"
        value={value}
        id={id}
        {...rest}
      >
        {children}
      </select>
      {error && error.message}
    </div>
  );
};

export default Selector;
