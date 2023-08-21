import { Flex, Box, Text, useMediaQuery } from "@chakra-ui/react";
import logo from '/public/assets/images/logo.svg'
import Image from 'next/image';
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Footer = () => {
  const [smallerThan540] = useMediaQuery("(max-width: 540px)");

  return(
    <Box
      width={"100%"}
      paddingTop={"40px"}
      px={4}
    >
      <Flex
        maxW={"1140px"}
        margin={"0 auto"}
        direction={"column"}
        gap={"40px"}
      >
        <Box>
          <Image
            src={logo}
            alt="Logo"
            width={124}
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
            <Text
              as='a'
              target={"_blank"}
              href={"https://www.linkedin.com/company/licitatudo/jobs/"}
            >
                Trabalhe Conosco
            </Text>
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
          </Box>
        </Box>

        <Box
          display={"flex"}
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
            href={"https://www.linkedin.com/in/rtcstr/?originalSubdomain=br"}
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
