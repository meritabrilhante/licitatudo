import { FaWhatsapp } from 'react-icons/fa';
import Button from "../button/Button.component";
import { StyledHeader } from "./Header";
import Image from 'next/image';
import logo from '/public/assets/images/logo.svg'

const Header = () => {
  return(
    <StyledHeader>
      <Image src={logo} alt={''}/>
      <Button text={'Whatsapp'} buttonType={'primary'} icon={FaWhatsapp} />
    </StyledHeader>
  );
};

export default Header;
