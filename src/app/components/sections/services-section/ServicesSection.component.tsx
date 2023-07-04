import { StyledServicesSection } from "./ServicesSection";
import ServiceCard from "./service-card/ServiceCard.component";

const ServicesSection = () => {
  return(
    <StyledServicesSection>
      <h4>SERVIÇOS</h4>
      <h2>O que fazemos?</h2>
      <p style={{ width: '50%', paddingBottom: '2rem' }}>
        Trabalhamos orientados a resultado buscando maximizar
        as chances de sucesso dos nossos clientes
      </p>

      <section style={{ display: 'flex', flexDirection: 'row' }}>
        <ServiceCard
          title={'Preparação Empresarial'}
          description={'Garantimos eficiência, conformidade e vantagem competitiva para sua empresa.'}
        />

        <ServiceCard
          title={'Gerenciamento de Documentos'}
          description={'Centralizamos as informações garantindo conformidade e segurança para o seu processo.'}
        />

        <ServiceCard
          title={'Participação de Pregões'}
          description={'Preparamos sua empresa para competir de forma estratégica e obter sucesso nos processos de licitação.'}
        />
      </section>

      <section style={{ display: 'flex', flexDirection: 'row' }}>
        <ServiceCard
          title={'Elaboração de Recurso/Contrarrazão'}
          description={'Auxiliamos na elaboração de uma argumentação sólida e consistente no decorrer de todo o processo licitatório'}
        />

        <ServiceCard
          title={'Diligenciamento'}
          description={'Acompanhamos todas as etapas dos processos licitatórios, assegurando a conformidade e o sucesso na obtenção de contratos'}
        />

        <ServiceCard
          title={'Controle de Execução Contratual'}
          description={'Controle de execução contratual, garantindo o cumprimento dos termos acordados de forma transparente e eficaz'}
        />
      </section>
    </StyledServicesSection>
  );
};

export default ServicesSection;
