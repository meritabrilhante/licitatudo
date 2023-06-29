import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Button } from "../../button";
import { StyledMidiasSection } from "./MidiasSection";

const MidiasSection = () => {
  const handleClick = (externalLink: string) => {
    window.open(externalLink, '_blank');
  }

  return(
    <StyledMidiasSection>
      <h2>Acompanhe nossos conteúdos</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis dui placerat diam congue convallis id vitae neque. Morbi varius eros id mauris pellentesque sollicitudin. </p>

      <section>
        <Button
          text={'Linkedin'}
          buttonType={'quaternary'}
          width={'180px'}
          icon={FaLinkedin}
          onClick={() => handleClick('https://www.linkedin.com/company/licitatudo/')}
        />

        <Button
          text={'Instagram'}
          buttonType={'quaternary'}
          width={'180px'}
          icon={FaInstagram}
          onClick={() => handleClick('https://www.instagram.com/licitatudobr/')}
        />
      </section>
    </StyledMidiasSection>
  );
};

export default MidiasSection;
