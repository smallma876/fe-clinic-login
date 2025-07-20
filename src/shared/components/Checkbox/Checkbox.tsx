import { ErrorUIField } from '@/domain/error.interface';
import { ChangeEvent, FC, InputHTMLAttributes, useState } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  error?: ErrorUIField;
  label?: string;
  checked?: boolean;
}

const Checkbox: FC<CheckboxProps> = ({ label, id, onChange, checked, ...rest }) => {
  const isControlled = checked !== undefined;

  const [internalChecked, setInternalChecked] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalChecked(event.target.checked);
    }
    onChange?.(event);
  };

  const isChecked = isControlled ? checked : internalChecked;

  return (
    <label htmlFor={id} className="flex items-center space-x-2 cursor-pointer">
      <div className="relative w-6 h-6">
        <input
          id={id}
          type="checkbox"
          className="peer sr-only"
          checked={isChecked}
          onChange={handleChange}
          {...rest}
        />
        <div className="w-full h-full border-1 border-gray-700 rounded-sm peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center transition-colors duration-200">
          {isChecked && (
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>
      {label && <span className="text-base">{label}</span>}
    </label>
  );
};

export default Checkbox;
