import { StyledAboutSection } from "./About";
import { BiSolidCheckSquare } from 'react-icons/bi';
import { FaPhoneAlt } from 'react-icons/fa';
import Image from 'next/image';
import women from 'public/assets/images/women.png'
import { Button } from "../../button";

const AboutSection = () => {
  return(
    <StyledAboutSection>
      <section style={{ display: 'flex', alignItems: 'left' }}>
        <Image src={women} alt={''} height={600}/>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h4>SOBRE NÓS</h4>
        <h2>Nossa consultoria é completa e especializada</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis dui placerat diam congue convallis id vitae neque. Morbi varius eros id mauris pellentesque sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis dui placerat diam congue convallis id vitae neque.</p>

        <p><BiSolidCheckSquare /> Lorem ipsum </p>
        <p><BiSolidCheckSquare /> Lorem ipsum </p>
        <p><BiSolidCheckSquare /> Lorem ipsum </p>

        <Button buttonType={'primary'} text={'Fale Conosco'} icon={FaPhoneAlt} width={'256px'}/>
      </section>
    </StyledAboutSection>
  );
};

export default AboutSection;
