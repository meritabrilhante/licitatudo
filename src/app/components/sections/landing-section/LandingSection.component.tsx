import { StyledBadge, StyledLandingSection, StyledSection } from "./LandingSection";

import Image from 'next/image';
import man from 'public/assets/images/siting-man.png'
import { FaRegPaperPlane } from "react-icons/fa";
import Button from "../../button/Button.component";

const LandingSection = () => {
  return(
    <StyledLandingSection>
      <StyledSection>
        <h1>
          Nunca foi tão fácil <br/>
          <b style={{ color: 'var(--primary-green)' }}>vender</b> para o governo</h1>
        <p style={{ width: '95%' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum mollis dui placerat diam congue convallis id vitae neque.
          Morbi varius eros id mauris pellentesque sollicitudin.
        </p>

        <Button
          icon={FaRegPaperPlane}
          buttonType={'secondary'}
          text={'Solicite um orçamento'}
          width={'204px'}
        />

        <section style={{ display: 'flex', gap: '2rem', alignItems: 'left' }}>
          <StyledBadge>
            <h2>1M+</h2>

            Lorem Ipsum
          </StyledBadge>

          <StyledBadge>
            <h2>1M+</h2>

            Lorem Ipsum
          </StyledBadge>
        </section>
      </StyledSection>


      <section style={{ display: 'flex', alignItems: 'center', margin: '0 auto' }}>
        <Image
          src={man}
          alt={''}
          height={500}
        />
      </section>
    </StyledLandingSection>
  );
};

export default LandingSection;
