import { StyledFooter } from "./Footer";
import { FaLinkedin } from "react-icons/fa";
import logo from '/public/assets/images/logo.svg'
import Image from 'next/image';

const Footer = () => {
  return(
    <StyledFooter>
      <Image src={logo} alt={''}/>

      <section>
        <div style={{ width: '50%' }}>
          <h5>Informações</h5>
          <p>Trecho SIA Trecho 3, Zona Industrial (Guará)</p>
          <p>Brasília, DF</p>
        </div>

        <div style={{ width: '25%' }}>
          <h5>Institucional</h5>
          <a>Política de Privacidade</a>
          <a>Trabalhe Conosco</a>
        </div>

        <div style={{ width: '25%' }}>
          <h5>Suporte</h5>
          <p>(61) 0000-0000</p>
          <p>email@example.com</p>
        </div>
      </section>

      <section style={{ padding: '2rem 0' }}>
        <FaLinkedin />
        <p style={{ paddingLeft: '1rem' }}>2023 © Empresa serviços LTDA - CNPJ: 00.000.000/0000-00. Todos os direitos reservados</p>
        <a>Desenvolvido por: <b>Rita Brilhante</b></a>
      </section>
    </StyledFooter>
  );
};

export default Footer;
