import { Button } from "@/app/components/button";
import { ChatIcon } from "@chakra-ui/icons";
import { Box, Flex, List, ListItem, Text, useMediaQuery } from "@chakra-ui/react";
import Image from 'next/image';
import women from 'public/assets/images/women.png'

const AboutSection = () => {
  const [smallerThan540] = useMediaQuery("(max-width: 540px)");

  return(
    <Box
      backgroundColor={'white.100'}
      py={24}
    >
      <Flex
        px={4}
        align={"center"}
        margin={"0 auto"}
        maxW={'1140px'}
        direction={{ base: "column", md: "row" }}
      >
        <Box
          w={{ base: "100%", md: "50%" }}
          display={'flex'}
          gap={'24px'}
          flexDirection={'column'}
        >
          <Text as='h5'>SOBRE NÓS</Text>
          <Text as='h2'>
            Nossa consultoria é completa e especializada
          </Text>

          <Text as='p'>
            Simplificamos o mercado de licitações para o governo com um know-how
            estratégico na área de orçamento público e finanças com excelência.
            Atuamos em âmbito nacional, homologando contratos nos diferentes
            nichos de mercado oferendo consultoria e suporte durante
            todo o processo licitatório.
          </Text>

          <Button
            text={"Fale Conosco"}
            variant={"solidGreen"}
            leftIcon={<ChatIcon />}
          />
        </Box>

        <Box
          margin={"0 auto"}
          p={smallerThan540 ? 8 : 0}
        >
          <Image
            src={women}
            alt="Logo"
            width={350}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutSection;
