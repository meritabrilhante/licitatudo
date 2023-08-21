import { Button, ButtonProps, useMediaQuery } from "@chakra-ui/react";
import { JSXElementConstructor, ReactElement } from "react";

interface CustomButtonProps extends ButtonProps {
  text: string;
  variant: string;
  leftIcon?: ReactElement<any, string | JSXElementConstructor<any>>
  rightIcon?: ReactElement<any, string | JSXElementConstructor<any>>
};

const ButtonComponent = (
  { text, variant, leftIcon, rightIcon }: CustomButtonProps) => {

  const handleClick = () => {
    window.open(
      'https://api.whatsapp.com/send/?phone=61983494631&text&type=phone_number&app_absent=0',
      '_blank'
    );
  };

  const [smallerThan540] = useMediaQuery("(max-width: 540px)");

  return(
      <Button
        variant={variant}
        size={smallerThan540 ? 'md' : 'lg'}
        maxWidth={smallerThan540 ? '100%' : '256px'}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        onClick={handleClick}
      >
        {text}
      </Button>
    );
  };
export default ButtonComponent;
