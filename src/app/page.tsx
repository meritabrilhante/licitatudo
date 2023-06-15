import { BiCircle, BiUser } from 'react-icons/bi'
import '../styles/global.scss'

import Button from './components/button/Button.component'

export default function Home() {
  return (
    <main>
      <Button text={'texto'} type={'primary'}>
        <BiUser />
      </Button>

      <Button text={'texto outro'}>
        <BiCircle />
      </Button>
    </main>
  )
}
