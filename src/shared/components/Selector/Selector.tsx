import { FC, ReactNode, SelectHTMLAttributes } from 'react';

interface SelectorProps extends SelectHTMLAttributes<HTMLSelectElement> {
  value: string;
  children: ReactNode;
  label?: string;
}

const Selector: FC<SelectorProps> = ({ label, id, value, children, ...rest }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select value={value} id={id} {...rest}>
        {children}
      </select>
    </div>
  );
};

export default Selector;
