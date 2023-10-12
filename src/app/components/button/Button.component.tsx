import { Button, ButtonProps, useMediaQuery } from "@chakra-ui/react";
import { JSXElementConstructor, ReactElement } from "react";

interface CustomButtonProps extends ButtonProps {
  text: string;
  variant: string;
  leftIcon?: ReactElement<any, string | JSXElementConstructor<any>>
  rightIcon?: ReactElement<any, string | JSXElementConstructor<any>>
};

const ButtonComponent = (
  { text, variant, leftIcon, rightIcon, onClick }: CustomButtonProps) => {

  const [smallerThan540] = useMediaQuery("(max-width: 540px)");

  return(
      <Button
        variant={variant}
        size={smallerThan540 ? 'md' : 'lg'}
        maxWidth={smallerThan540 ? '100%' : '256px'}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        onClick={onClick}
      >
        {text}
      </Button>
    );
  };
export default ButtonComponent;
