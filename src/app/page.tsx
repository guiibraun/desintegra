import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from '@/components/Button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-gradient-to-t from-indigo-900 to-blue-500 min-h-screen flex items-center justify-center'>
      <section className='h-96 max-w-sm w-full bg-white/30 rounded backdrop-filter backdrop-blur-xl flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <Button href="https://pay.greenn.com.br/21360/offer/27G7SL?_rl_4rzwh4=gqmrcj">Ingresso Vip</Button>
        </div>
      </section>
    </main>
  )
}
