import { Card, CardHeader, Text, CardBody, CardProps, CardFooter } from "@chakra-ui/react";
import { Button } from "../button";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { CustomIcon } from "../custom-icon";
import { IconSVG } from "../custom-icon/svgs";

interface CustomCardpProps extends CardProps {
  title: string;
  description: string;
  icon: IconSVG;
}

const CustomCard = ({ title, description, icon,  }: CustomCardpProps)=> {
  return(
    <Card>
      <CardHeader>
        <CustomIcon type={icon} />

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
