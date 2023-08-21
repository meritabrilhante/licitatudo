import { Button } from "@/app/components/button";
import { Flex, Text, Box, useMediaQuery } from "@chakra-ui/react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const SocialComponent = () => {
  const [smallerThan540] = useMediaQuery("(max-width: 540px)");

  return(
    <Box
      backgroundColor={"white.100"}
      py={8}
    >
      <Flex
        maxW={'1140px'}
        px={8}
        py={8}
        direction={"column"}
        margin={"0 auto"}
        borderRadius={"32px"}
      >
        <Box display={"flex"} flexDirection={"column"} gap={"16px"}>
          <Text as='h2'>Acompanhe nossos conteúdos</Text>
          <Text
            as='p'
            width={ smallerThan540 ? '100%' : '50%' }
          >
            Dê o primeiro passo pra impulsionar seu negócio
            e fique por dentro das nossas novidades, siga nossas redes sociais.
          </Text>

          <Box
            display={'flex'}
            gap={'16px'}
          >
            <Button
              text={"Linkedin"}
              variant={"solidBlue"}
              leftIcon={<FaLinkedin />}
            />

            <Button
              text={"Instagram"}
              variant={"solidBlue"}
              leftIcon={<FaInstagram />}
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default SocialComponent;
