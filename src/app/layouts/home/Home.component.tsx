import { Button } from "@/app/components/button";
import { PhoneIcon } from "@chakra-ui/icons";
import { Flex, Box, Text } from "@chakra-ui/react";
import Image from 'next/image';
import man from 'public/assets/images/siting-man.png'

const HomeSection = () => {
  return(
    <Flex
      px={4}
      py={32}
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
        />
      </Box>

      <Box>
        <Image
          src={man}
          alt="Homem sentado com um laptop apontando para o lado esquerdo"
          width={400}
        />
      </Box>
    </Flex>
  );
};

export default HomeSection;
