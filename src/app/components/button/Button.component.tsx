import { IconType } from "react-icons";
import { StyledButton } from "./Button";

export interface ButtonProps {
  buttonType: ButtonType;
  text?: string;
  icon?: IconType;
  width?: string;
  onClick?: () => void;
}

export type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'quaternary';

const IconWrapper = ({ icon: Icon }: { icon: IconType }) => <Icon size={'16px'} />;

const Button = ({ buttonType, text, icon, width }: ButtonProps) => {
  const handleClick = (externalLink: string) => {
    window.open(externalLink, '_blank');
  };

  return (
    <StyledButton
      buttonType={buttonType}
      width={width}
      onClick={() => handleClick('https://api.whatsapp.com/send/?phone=61983494631&text&type=phone_number&app_absent=0')}
    >
      {icon && <IconWrapper icon={icon} />}
      {text}
    </StyledButton>
  );
};

export default Button;
