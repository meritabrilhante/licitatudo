import { IconType } from "react-icons";
import { StyledButton } from "./Button"

export interface ButtonProps {
  buttonType: ButtonType;
  text?: string;
  icon?: IconType;
}

export type ButtonType = 'primary' | 'secondary' | 'tertiary'

const IconWrapper = ({ icon: Icon }: { icon: IconType }) => <Icon size={'16px'}/>;

const Button = ({ buttonType, text, icon }: ButtonProps) => {
  return(
    <StyledButton buttonType={buttonType}>
      {icon && <IconWrapper icon={icon} />}
      {text}
    </StyledButton>
  );
}

export default Button;