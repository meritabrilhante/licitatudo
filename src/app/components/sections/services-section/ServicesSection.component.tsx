import { StyledServicesSection } from "./ServicesSection";
import ServiceCard from "./service-card/ServiceCard.component";

const ServicesSection = () => {
  return(
    <StyledServicesSection>
      <h4>SERVIÇOS</h4>
      <h2>O que fazemos?</h2>
      <p style={{ width: '60%', paddingBottom: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis dui placerat diam congue convallis id vitae neque. </p>

      <section style={{ display: 'flex', flexDirection: 'row' }}>
        <ServiceCard
          title={'Lorem ipsum dolor sit amet'}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis dui placerat diam congue convallis id vitae neque.'}
        />

        <ServiceCard
          title={'Lorem ipsum dolor sit amet'}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis dui placerat diam congue convallis id vitae neque.'}
        />

        <ServiceCard
          title={'Lorem ipsum dolor sit amet'}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis dui placerat diam congue convallis id vitae neque.'}
        />
      </section>

      <section style={{ display: 'flex', flexDirection: 'row' }}>
        <ServiceCard
          title={'Lorem ipsum dolor sit amet'}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis dui placerat diam congue convallis id vitae neque.'}
        />

        <ServiceCard
          title={'Lorem ipsum dolor sit amet'}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis dui placerat diam congue convallis id vitae neque.'}
        />

        <ServiceCard
          title={'Lorem ipsum dolor sit amet'}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis dui placerat diam congue convallis id vitae neque.'}
        />
      </section>
    </StyledServicesSection>
  );
};

export default ServicesSection;
