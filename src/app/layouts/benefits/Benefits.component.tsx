import { Card } from "@/app/components/card";
import { CustomIcon } from "@/app/components/custom-icon";
import { Box, Divider, Flex, Text, useMediaQuery } from "@chakra-ui/react";

const BenefitsSection = () => {
  const [smallerThan540] = useMediaQuery("(max-width: 540px)");

  return(
    <Flex
      direction={'column'}
      align={'center'}
      gap={'40px'}
      px={4}
      py={20}
    >
      <Box
        textAlign={'center'}
        display={'flex'}
        flexDirection={'column'}
        gap={'40px'}
      >
        <Text as='h5'>IMPULSIONE SUAS VENDAS</Text>
        <Text
          as='h2'
          width={smallerThan540 ? '100%' : '60%'}
          margin={'0 auto'}
        >
          Vender para o governo pode ser muito
          vantajoso para o seu negócio
        </Text>
      </Box>

      <Flex
        direction={smallerThan540 ? 'column' : 'row'}
        margin={"0 auto"}
        maxW={'1140px'}
        display={smallerThan540 ? 'flex': 'grid'}
        gridTemplateColumns="repeat(4, 1fr)"
        py={38}
      >
        <Card
          title={"Não precisa ter estoque"}
          description={
            "0 investimento incial, o governo oferece prazos para você atender à demanda."
          }
          children={
            <CustomIcon
              type={"shop"}
              alt={"shop"}
              size={40}
            />
          }
        />

        <Card
          title={"Renda extra pra quem é CLT"}
          description={
            "Qualquer porte de empresa está apto a vender para o governo, até mesmo Pessoa Física."
          }
          children={
            <CustomIcon
              type={"dollar"}
              alt={"dollar"}
              size={40}
            />
          }
        />

        <Card
          title={"Não precisa de time de vendas"}
          description={
            "Venda para qualquer lugar do Brasil sem se preocupar com time de vendas."
          }
          children={
            <CustomIcon
              type={"users"}
              alt={"users"}
              size={40}
            />
          }
        />

        <Card
          title={"0 investimento em marketing"}
          description={
            "Você não precisa captar o cliente, o governo vem até você."
          }
          children={
            <CustomIcon
              type={"scissors"}
              alt={"scissors"}
              size={40}
            />
          }
        />
      </Flex>
    </Flex>
  );
};

export default BenefitsSection;
