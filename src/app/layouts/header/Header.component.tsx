import { Button } from "@/app/components/button";
import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import Image from 'next/image';

const Header = () => {
  const [smallerThan540] = useMediaQuery("(max-width: 540px)");

  const handleWhatsppOpen = () => {
    window.open(
      'https://api.whatsapp.com/send/?phone=61983494631&text&type=phone_number&app_absent=0',
      '_blank'
    );
  };

  return(
    <Box
        as="header"
        borderBottom="0.5px solid #D0D6E2"
        position={"fixed"}
        zIndex={"9999"}
        width={"100%"}
        backgroundColor={"white.200"}
        py={8}
        px={4}
      >
        <Flex
          justify={"space-between"}
          maxW={"1280px"}
          margin={"0 auto"}
        >
          <Image
            src={'https://raw.githubusercontent.com/meritabrilhante/licitatudo-imagens/09fddaa6f8756f0e249fe6f1aac6415a8a4288ad/images/logo.svg'}
            height={10}
            alt="Licitatudo"
            width={smallerThan540 ? 140 : 200}
          />

          <Button
            text={"Whatsapp"}
            variant={"solidGreen"}
            leftIcon={<FaWhatsapp size={24}/>}
            onClick={handleWhatsppOpen}
          />
        </Flex>
      </Box>
  );
};

export default Header;
