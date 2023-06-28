import { StyledBenefitsSection } from "./BenefitsSection";
import BenefitsCard from "./benefits-card/BenefitsCard.component";

const BenefitsSection = () => {
  return(
    <StyledBenefitsSection>
      <h4> IMPULSIONE SUAS VENDAS</h4>
      <h2>Vender para o governo pode ser <br/>
      muito vantajoso para o seu negócio</h2>
      <p style={{ width: '75%', paddingBottom: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis dui placerat diam congue convallis id vitae neque. Morbi varius eros id mauris pellentesque sollicitudin.</p>

      <section style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '2rem 0' }}>
        <BenefitsCard
          icon={'shop'}
          title={'Não precisa ter estoque'}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit vestibulum mollis dui placerat diam congue.'}
        />

        <BenefitsCard
          icon={'dollar'}
          title={'Renda extra pra quem é CLT'}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit vestibulum mollis dui placerat diam congue.'}
        />

        <BenefitsCard
          icon={'users'}
          title={'Não precisa de time de vendas'}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit vestibulum mollis dui placerat diam congue.'}
        />

        <BenefitsCard
          icon={'scissors'}
          title={'0 investimento em Marketing'}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit vestibulum mollis dui placerat diam congue.'}
        />
      </section>
    </StyledBenefitsSection>
  );
};

export default BenefitsSection;
