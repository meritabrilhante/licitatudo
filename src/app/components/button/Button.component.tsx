import { IconType } from "react-icons";
import { StyledButton } from "./Button"

export interface ButtonProps {
  buttonType: ButtonType;
  text?: string;
  icon?: IconType;
  width?: string;
  onClick?: () => void
}

export type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'quaternary'

const IconWrapper = ({ icon: Icon }: { icon: IconType }) => <Icon size={'16px'}/>;

const Button = ({ buttonType, text, icon, width, onClick }: ButtonProps) => {
  return(
    <StyledButton buttonType={buttonType} width={width} onClick={onClick}>
      {icon && <IconWrapper icon={icon} />}
      {text}
    </StyledButton>
  );
}

export default Button;