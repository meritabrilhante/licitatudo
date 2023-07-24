import Image from 'next/image';
import { Button } from '../button';

import { FaWhatsapp } from 'react-icons/fa';
import { StyledHeader } from "./Header";

import logo from '/public/assets/images/logo.svg'

const Header = () => {
  return(
    <StyledHeader>
      <Image
        src={logo}
        alt={'Logo da Licitatudo - Acessoria em Licitações'}
        width={124}
      />

      <Button
        text={'Whatsapp'}
        buttonType={'primary'}
        icon={FaWhatsapp}
      />
    </StyledHeader>
  );
};

export default Header;
