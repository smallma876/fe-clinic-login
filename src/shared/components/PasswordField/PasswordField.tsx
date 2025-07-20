import { ErrorUIField } from '@/domain/error.interface';
import { ChangeEvent, FC, InputHTMLAttributes, useState } from 'react';

interface PasswordFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  error?: ErrorUIField;
  label?: string;
  value?: string;
  defaultValue?: string;
}

const PasswordField: FC<PasswordFieldProps> = ({
  label,
  id,
  value,
  onChange,
  error,
  defaultValue = '',
  ...rest
}) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (!isControlled) {
      setInternalValue(event.target.value);
    }
    onChange?.(event);
  };

  return (
    <div className="flex flex-col w-full">
      <label htmlFor="document">{label}</label>
      <input
        id={id}
        type="password"
        className="rounded-sm border-1 border-gray-700 h-9 outline-none p-2"
        value={isControlled ? value : internalValue}
        onChange={handleChange}
        {...rest}
      />
      {error && error.message}
    </div>
  );
};

export default PasswordField;
