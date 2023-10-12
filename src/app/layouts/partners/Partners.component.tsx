import { Flex, Text, Box, useMediaQuery } from "@chakra-ui/react";
import Image from 'next/image';
import saboretti from 'public/assets/images/partners/saboretti.png'
import italinea from 'public/assets/images/partners/italinea.png'
import todeschini from 'public/assets/images/partners/todeschini.png'
import laPriori from 'public/assets/images/partners/la-priori.png'

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
           maxW={'1280px'}
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
              src={'https://raw.githubusercontent.com/meritabrilhante/licitatudo/3cc3d14f4d1b14b62b75bc92246e4130d0c003bb/public/assets/images/partners/saboretti.svg'}
              alt="Saboretti"
              width={140}
              height={20}
            />

            <Image
              src={'https://raw.githubusercontent.com/meritabrilhante/licitatudo/3cc3d14f4d1b14b62b75bc92246e4130d0c003bb/public/assets/images/partners/italinea.svg'}
              alt="Italinea"
              width={140}
              height={20}
            />

            <Image
              src={'https://raw.githubusercontent.com/meritabrilhante/licitatudo/3cc3d14f4d1b14b62b75bc92246e4130d0c003bb/public/assets/images/partners/todeschini.svg'}
              alt="Todeschini"
              width={140}
              height={20}
            />

            <Image
              src={'https://raw.githubusercontent.com/meritabrilhante/licitatudo/3cc3d14f4d1b14b62b75bc92246e4130d0c003bb/public/assets/images/partners/la-priori.svg'}
              alt="La Priori"
              width={140}
              height={20}
            />
        </Flex>
      </Flex>
    </Box>
  );
};

export default PartnersSection;
