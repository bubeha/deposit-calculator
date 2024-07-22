import { PropsWithChildren } from 'react';

import { Button as StyledButton } from './button.styled';

type ButtonProps = PropsWithChildren<{
  type?: 'submit' | 'button',
  className?: string;
}>

export function Button({ children, className, type = 'button' }: ButtonProps) {
  return (
    <StyledButton className={className} type={type}>
      {children}
    </StyledButton>
  );
}
