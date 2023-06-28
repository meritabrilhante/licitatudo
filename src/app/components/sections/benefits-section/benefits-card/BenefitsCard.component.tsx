import { StyledBenefitsCard } from "./BenefitsCard"
import Image from 'next/image';
import shop from '/public/assets/icons/shop.svg'
import dollar from '/public/assets/icons/dollar.svg'
import users from '/public/assets/icons/users.svg'
import scissors from '/public/assets/icons/scissors.svg'

interface BenefitsCardProps {
  title: string;
  description: string;
  icon: CardIcon;
}

export type CardIcon = 'shop' | 'dollar' | 'users' | 'scissors'

const CardIcons = {
  'shop': shop,
  'dollar': dollar,
  'users': users,
  'scissors': scissors
}

const BenefitsCard = ({ title, description, icon }: BenefitsCardProps) => {
  const CardIcon = CardIcons[icon]

  return(
    <StyledBenefitsCard>
      <Image src={CardIcon} alt={""}/>

      <h3 style={{ width: '80%' }}>{title}</h3>
      <p>{description}</p>
    </StyledBenefitsCard>
  );
};

export default BenefitsCard;
