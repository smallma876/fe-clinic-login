import { ErrorUIField } from '@/domain/error.interface';
import { ChangeEvent, FC, InputHTMLAttributes, useState } from 'react';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  error?: ErrorUIField;
  label?: string;
  value?: string;
  defaultValue?: string;
}

const TextField: FC<TextFieldProps> = ({
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
    <div>
      <label htmlFor="document">{label}</label>
      <input
        id={id}
        type="text"
        value={isControlled ? value : internalValue}
        onChange={handleChange}
        {...rest}
      />
      {error && error.message}
    </div>
  );
};

export default TextField;
