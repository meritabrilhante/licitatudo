import { Card, CardHeader, Text, CardBody, CardProps, CardFooter } from "@chakra-ui/react";
import { Button } from "../button";
import { ExternalLinkIcon } from "@chakra-ui/icons";

interface CustomCardpProps extends CardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}


const CustomCard = ({ title, description, children }: CustomCardpProps)=> {
  return(
    <Card>
      <CardHeader>
        {children}

        <Text as='h3'>{title}</Text>
      </CardHeader>

      <CardBody>
        <Text as='p'>{description}</Text>
      </CardBody>

      <CardFooter>
        <Button
          text={"Saiba Mais"}
          variant={"outlined"}
          leftIcon={<ExternalLinkIcon />}
        />
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
