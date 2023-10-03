import { Button } from "@/app/components/button";
import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import logo from '/public/assets/images/logo.svg'
import { FaWhatsapp } from "react-icons/fa";
import Image from 'next/image';

const Header = () => {
  const [smallerThan540] = useMediaQuery("(max-width: 540px)");

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
            src={logo}
            alt="Licitatudo"
            width={smallerThan540 ? 140 : 200}
          />

          <Button
            text={"Whatsapp"}
            variant={"solidGreen"}
            leftIcon={<FaWhatsapp size={24}/>}
          />
        </Flex>
      </Box>
  );
};

export default Header;
