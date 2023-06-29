import { Button } from "../../button";
import { StyledTalkToUsSection } from "./TalkToUs";
import { FaWhatsapp } from 'react-icons/fa';

const TalkToUsSection = () => {
  return(
    <StyledTalkToUsSection>
      <h4>FALE CONOSCO</h4>
      <h2>Nós te ajudamos a impulsionar sua renda</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis dui placerat diam congue convallis id vitae neque. Morbi varius eros id mauris pellentesque sollicitudin.</p>

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
