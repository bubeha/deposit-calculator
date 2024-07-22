import { forwardRef, HTMLInputTypeAttribute, useId } from 'react';
import { FormGroup } from 'shared/ui/form/input.styled';

type InputProps = {
  label?: string;
  type?: HTMLInputTypeAttribute;
  name?: string;
  placeholder?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  name,
  placeholder,
  type = 'text',
  ...rest
}, ref) => {
  const id = useId();

  return (
    <FormGroup>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        ref={ref}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    </FormGroup>
  );
});
