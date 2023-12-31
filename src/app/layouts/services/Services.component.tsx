import { Card } from "@/app/components/card";
import { CustomIcon } from "@/app/components/custom-icon";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";

const ServicesSection = () => {
  const [smallerThan540] = useMediaQuery("(max-width: 540px)");

  return(
    <Flex
      direction={'column'}
      align={'center'}
      px={4}
      paddingTop={'72px'}
    >
      <Box
        textAlign={smallerThan540 ? 'left' : 'center'}
      >
        <Text as='h5'>SERVIÇOS</Text>
        <Text as='h2'>O que fazemos?</Text>
      </Box>

      <Flex
        display={smallerThan540 ? 'flex': 'grid'}
        direction={'column'}
        gap={'32px'}
        gridTemplateColumns="repeat(3, 1fr)"
        margin={"0 auto"}
        py={16}
        maxW={'1280px'}
      >
        <Card
          title={"Adequação Documental"}
          description={"Garantimos que todos os documentos estão em ordem, cumprindo os requisitos exigidos."}
          icon={'shop'}
        />

        <Card
          title={"Captação de Oportunidades"}
          description={"Identificamos oportunidades de licitação alinhadas com o perfil do seu negócio."}
          icon={'shop'}
        />

        <Card
          title={"Participação na fase de lances"}
          description={"Gerenciamos o processo de apresentação de lances, buscando a melhor estratégia competitiva."}
          icon={'shop'}
        />

        <Card
          title={"Recursos e Impugnações"}
          description={"Gerenciamos recursos e impugnações para assegurar seus direitos durante o processo."}
          icon={'shop'}
        />

        <Card
          title={"Acompanhamento de Todo o Processo Licitatório"}
          description={"Estamos ao seu lado em cada etapa, desde a inscrição até a adjudicação."}
          icon={'shop'}
        />

        <Card
          title={"Acompanhamento Pós Licitação"}
          description={"Apoiamos você na fase pós-licitação, garantindo a execução tranquila do contrato."}
          icon={'shop'}
        />
      </Flex>
    </Flex>
  );
};

export default ServicesSection;
