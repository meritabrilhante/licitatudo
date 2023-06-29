import { StyledServiceCard } from "./ServiceCard";
import Image from 'next/image';
import message from 'public/assets/icons/message.svg'
import { Button } from "../../../button";

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard = ({ title, description }: ServiceCardProps) => {
  return(
    <StyledServiceCard>
      <Image src={message} alt={''}/>
      <h3>{title}</h3>
      <p>{description}</p>

      <Button buttonType={'tertiary'} text={'Quero saber mais'}/>
    </StyledServiceCard>
  );
};

export default ServiceCard;
