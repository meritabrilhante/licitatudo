import { StyledButton, StyledButtonProps } from "./Button"

interface ButtonProps {
  type: StyledButtonProps;
  text: string;
  children: React.ReactNode;
}

const Button = ({ type, text, children }: ButtonProps) => {
  return(
    <StyledButton type={'primary'}>
      {children}
      {text}
    </StyledButton>
  );
}

export default Button;