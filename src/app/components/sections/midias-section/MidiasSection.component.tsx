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
      <p>
        Esteja sempre à frente da concorrência.
        Fique por dentro das nossas novidades e conteúdos e esteja
        preparado para conqusitar novas oportunidades para o seu negócio!
      </p>

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
