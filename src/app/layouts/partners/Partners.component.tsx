import { Flex, Text, Box, useMediaQuery } from "@chakra-ui/react";
import Image from 'next/image';
import saboretti from 'public/assets/images/partners/saboretti.png'
import italinea from 'public/assets/images/partners/italinea.png'
import todeschini from 'public/assets/images/partners/todeschini.png'
import shopSolar from 'public/assets/images/partners/shop-solar.png'

const PartnersSection = () => {
  const [smallerThan540] = useMediaQuery("(max-width: 540px)");

  return(
    <Box
      px={4}
      py={2}
      p={16}
      flexDirection={smallerThan540 ? 'column' : 'row'}
      backgroundColor={'white.100'}
    >
        <Flex
           margin={"0 auto"}
           maxW={'1140px'}
           justify={'center'}
           align={'center'}
           direction={smallerThan540 ? 'column' : 'row'}
        >
           <Text
            as='p'
            width={'30%'}
           >
            Alguns de nossos parceiros:
          </Text>

          <Flex
            px={4}
            py={2}
            align={'center'}
            width={'100%'}
            justify={'space-between'}
            direction={smallerThan540 ? 'column' : 'row'}
          >
            <Image
              src={saboretti}
              alt="Logo"
              width={120}
            />

            <Image
              src={italinea}
              alt="Logo"
              width={120}
            />

            <Image
              src={todeschini}
              alt="Logo"
              width={120}
            />

            <Image
              src={shopSolar}
              alt="Logo"
              width={120}
            />
        </Flex>
      </Flex>
    </Box>
  );
};

export default PartnersSection;
