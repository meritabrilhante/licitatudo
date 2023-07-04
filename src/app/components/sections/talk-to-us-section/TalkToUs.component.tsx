import { Button } from "../../button";
import { StyledTalkToUsSection } from "./TalkToUs";
import { FaWhatsapp } from 'react-icons/fa';

const TalkToUsSection = () => {
  return(
    <StyledTalkToUsSection>
      <h4>FALE CONOSCO</h4>
      <h2>Nós te ajudamos a impulsionar sua renda</h2>
      <p>
        Estratégias eficientes e suporte personalizado visando garantir
        seu sucesso nos processos licitatórios.
      </p>

      <Button
        buttonType={'secondary'}
        text={'Solicite seu orçamento'}
        width={'256px'}
        icon={FaWhatsapp}
      />
    </StyledTalkToUsSection>
  );
};

export default TalkToUsSection;
