import { Flex, Box, Text, useMediaQuery } from "@chakra-ui/react";
import Image from 'next/image';
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Footer = () => {
  const [smallerThan540] = useMediaQuery("(max-width: 540px)");

  return(
    <Box
      width={"100%"}
      paddingTop={"56px"}
      px={4}
    >
      <Flex
        maxW={"1280px"}
        margin={"0 auto"}
        direction={"column"}
        gap={"40px"}
      >
        <Box>
          <Image
            src={'https://raw.githubusercontent.com/meritabrilhante/licitatudo-imagens/09fddaa6f8756f0e249fe6f1aac6415a8a4288ad/images/logo.svg'}
            alt="Licitatudo"
            width={124}
            height={10}
          />
        </Box>

        <Box
          display={"flex"}
          flexDirection={smallerThan540 ? "column" : "row"}
          justifyContent={"space-between"}
          gap={"16px"}
        >
          <Box
            display={"flex"}
            gap={"16px"}
            flexDirection={"column"}
          >
            <Text as='h4'>Institucional</Text>
            <Text>Política de Privacidade</Text>
          </Box>

          <Box
            display={"flex"}
            gap={"16px"}
            flexDirection={"column"}
          >
            <Text as='h4'>Informações</Text>
            <Text as='p'>
              SCRS 516 Bloco B Número 69 SCRS 516, B. B, Número 66
              Asa Sul, Brasília - DF, 70381-525</Text>
            <Text>licitatudo22@gmail.com</Text>
            <Text>61 98349-4631</Text>
          </Box>
        </Box>

        <Box
          borderTop={'0.5px solid #D0D6E2'}
          display={"flex"}
          padding={"16px 0"}
          flexDirection={smallerThan540 ? "column" : "row"}
          justifyContent={"space-between"}
          gap={"16px"}
        >
          <Text as='p'>
            2023 © Licitatudo - CNPJ:  48.695.172/0001-53.
            Todos os direitos reservados
          </Text>

          <Text
            display={"flex"}
            gap={"8px"}
            as='a'
            href={"https://www.linkedin.com/in/meritabrilhante/"}
            target={"_blank"}
          >
            Desenvolvido por <b>Rita Brilhante Tecnologia</b>
            <ExternalLinkIcon />
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
