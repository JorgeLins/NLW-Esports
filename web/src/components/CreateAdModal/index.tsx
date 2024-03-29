import { GameController, MagnifyingGlassPlus} from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import { Input } from '../Form/Input'

export function CreateAdModal () {
    return(
        
      <Dialog.Portal>
        <Dialog.Overlay className='bg-black/60 inset-0 fixed'>

          <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
            <Dialog.Title className='text-3xl text-white font-black'>Publique um anúncio</Dialog.Title>
              <form className='mt-8 flex flex-col gap-4'>
                <div className=' flex flex-col gap-2'>
                  <label className='font-semibold' htmlFor="game">Qual o game?</label>
                  <Input id='game' placeholder='Selecione o game que deseja jogar'/>
                </div>
                <div className=' flex flex-col gap-2'>
                  <label className='font-semibold' htmlFor="name">Seu nome (ou nickname)</label>
                  <Input id='name' type="text" placeholder='Como te chamam dentro do game?'/>
                </div>
                <div className='grid grid-cols-2 gap-6'>
                  <div className=' flex flex-col gap-2'>
                    <label className='font-semibold' htmlFor="playingTime">Joga há quantos anos?</label>
                    <Input id='playingTime' type="text" placeholder='Tudo bem ser ZERO'/>
                  </div>
                  <div className=' flex flex-col gap-2'>
                    <label className='font-semibold' htmlFor="discord">Qual seu Discord?</label>
                    <Input id='discord' type="text" placeholder='Usuario#0000'/>
                  </div>
                </div>

                <div className='flex gap-6'>
                  <div className='flex flex-col gap-2'>
                    <label className='font-semibold' htmlFor="weekDays">Quando costuma jogar?</label>
                    <div className='grid grid-cols-4 gap-2'>
                      <button className=' w-8 h-8 rounded bg-zinc-900' title='Domingo'>D</button>
                      <button className=' w-8 h-8 rounded bg-zinc-900' title='Segunda'>S</button>
                      <button className=' w-8 h-8 rounded bg-zinc-900' title='Terça'>T</button>
                      <button className=' w-8 h-8 rounded bg-zinc-900' title='Quarta'>Q</button>
                      <button className=' w-8 h-8 rounded bg-zinc-900' title='Quinta'>Q</button>
                      <button className=' w-8 h-8 rounded bg-zinc-900' title='Sexta'>S</button>
                      <button className=' w-8 h-8 rounded bg-zinc-900' title='Sábado'>S</button>
                    </div>
                  </div>
                  <div className='flex flex-col gap-2 flex-1'>
                    <label className='font-semibold' htmlFor="hourStart">Qual horário do dia?</label>
                    <div className='grid grid-cols-2 gap-1'>
                      <Input type="time" id="hourStart" placeholder='De'/>
                      <Input type="time" id="hourEnd" placeholder='Até'/>
                    </div>
                  </div>
                </div>

                <div className='mt-2 flex gap-2 text-sm'>
                  <input type="checkbox" />
                  Costumo me conectar ao chat de voz
                </div>

                <footer className='mt-4 flex justify-end gap-4'>
                <Dialog.Close type='button' className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>Cancelar</Dialog.Close>
                <button className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600' type='submit'>
                  <GameController size={24}/>
                  Encontrar duo
                  </button>
                </footer>
              </form>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    )
}