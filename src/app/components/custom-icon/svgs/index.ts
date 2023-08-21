import dollarIcon from './dollar.svg';
import messageIcon from './message.svg';
import scissorsIcon from './scissors.svg'
import shopIcon from './shop.svg';
import usersIcon from './users.svg'

export type IconSVG = 'dollar' | 'message' | 'scissors' | 'shop' | 'users'

export const iconSVGs: { [key in IconSVG]: any } = {
  dollar: dollarIcon,
  message: messageIcon,
  scissors: scissorsIcon,
  shop: shopIcon,
  users: usersIcon
};
