import { Button } from "@/app/components/button";
import { PhoneIcon } from "@chakra-ui/icons";
import { Flex, Box, Text } from "@chakra-ui/react";
import Image from 'next/image';

const HomeSection = () => {
  const handleWhatsppOpen = () => {
    window.open(
      'https://api.whatsapp.com/send/?phone=61983494631&text&type=phone_number&app_absent=0',
      '_blank'
    );
  };

  return(
    <Flex
      px={4}
      py={40}
      align={"center"}
      margin={"0 auto"}
      maxW={'1280px'}
      direction={{ base: "column", md: "row" }}
    >
      <Box
        w={{ base: "100%", md: "60%" }}
        display={'flex'}
        gap={'32px'}
        flexDirection={'column'}
      >
        <Text as='h1'>
          <Text as="b" color="green.100">Venda</Text>{" "}
          para o governo todos os dias
        </Text>

        <Text as='p' w={{ base: "100%", md: "75%" }}>
          Te ajudamos a descomplicar o processo licitatório oferecendo
          suporte e consultoria especializada em licitações em todo o
          território nacional.
        </Text>

        <Button
          text={"Solicitar Orçamento"}
          variant={"solidBlue"}
          leftIcon={<PhoneIcon />}
          onClick={handleWhatsppOpen}
        />
      </Box>

      <Box margin={'0 auto'}>
        <Image
          src={'https://raw.githubusercontent.com/meritabrilhante/licitatudo/c0adc55e2a8b301950a508b25e594231d54724d1/public/assets/images/image.svg'}
          height={200}
          alt="Homem sentado com um laptop apontando para o lado esquerdo"
          width={500}
        />
      </Box>
    </Flex>
  );
};

export default HomeSection;
