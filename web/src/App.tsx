import './styles/main.css'
import { GameController, MagnifyingGlassPlus} from 'phosphor-react'
import { GameBanner } from './components/GameBanner'
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from './Assets/Logo.svg'
import { CreateAdBanner } from './components/CreateAdBanner'
import { useEffect, useState } from 'react'
import { Input } from './components/Form/Input'
import { CreateAdModal } from './components/CreateAdModal'

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count:{
    ads:number
  }
}


function App() { 

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games/').then(response => response.json()).then(data => {
      setGames(data)
    })
  }, [])


  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="" />

      <h1 className='text-7xl text-white font-black mt-20'>Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui</h1>

      <div className='grid grid-cols-7 gap-6 mt-16'>

        {games.map(game => {
          return(
            <GameBanner 
            key={game.id}
            bannerUrl={game.bannerUrl} 
            title={game.title} 
            adsCount={game._count.ads}/>

          )
        })}
      </div>
      <Dialog.Root>
      <CreateAdBanner/>

      <CreateAdModal/>
      </Dialog.Root>
    </div>
  )
}

export default App
