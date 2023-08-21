import { Button } from "@/app/components/button";
import { PhoneIcon } from "@chakra-ui/icons";
import { Flex, Box, Spacer, Text, useMediaQuery } from "@chakra-ui/react";
import Image from 'next/image';
import man from 'public/assets/images/siting-man.png'

const HomeSection = () => {
  const [smallerThan540] = useMediaQuery("(max-width: 540px)");

  return(
    <Flex
      px={4}
      py={24}
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
        <Text as='h1'>
          <Text as="b" color="green.100">Venda</Text>{" "}
          para o governo todos os dias
        </Text>

        <Text as='p'>
          Te ajudamos a descomplicar o processo licitatório oferecendo
          suporte e consultoria especializada em licitações em todo o
          território nacional.
        </Text>

        <Button
          text={"Solicitar Orçamento"}
          variant={"solidBlue"}
          leftIcon={<PhoneIcon />}
        />

        <Flex
          justify={smallerThan540 ? 'space-evenly' : 'flex-start'}
        >
          <Box
            textAlign={"center"}
            p={8}
          >
            <h2>+1M</h2>
            <Text>Lorem ipsum</Text>
          </Box>

          <Box
            textAlign={"center"}
            p={8}
          >
            <h2>+1M</h2>
            <Text>Lorem ipsum</Text>
          </Box>
        </Flex>
      </Box>

      <Box margin={"0 auto"}>
        <Image
          src={man}
          alt="Logo"
          width={400}
        />
      </Box>
    </Flex>
  );
};

export default HomeSection;
