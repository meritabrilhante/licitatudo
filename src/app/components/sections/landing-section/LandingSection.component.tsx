import Image from 'next/image';

import { StyledBadge, StyledLandingSection, StyledSection } from "./LandingSection";
import Button from "../../button/Button.component";

import man from 'public/assets/images/siting-man.png'

const LandingSection = () => {
  return(
    <StyledLandingSection>
      <StyledSection>
        <h1>
          Nunca foi tão fácil <b>vender</b> para o governo
        </h1>

        <p>
          Simplificamos processos licitatórios
          oferecendo uma consultoria técnica e júridica especializada
          na gestão de licitações públicas em todo território nacional
        </p>

        <Button
          buttonType={'secondary'}
          text={'Solicite um orçamento'}
          width={'256px'}
        />

        <section>
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
