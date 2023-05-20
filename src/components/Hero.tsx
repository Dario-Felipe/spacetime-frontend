import Image from 'next/image'

import nlwLogo from '@/assets/nlw-spacetime-logo.svg'

export function Hero() {
  return (
    <div className="flex flex-col items-start justify-center gap-5">
      <Image src={nlwLogo} alt="logo" />

      <div className="max-w-[420px] space-y-1">
        <h1 className="text-5xl font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>

        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>

      <a
        href=""
        className="rounded-full bg-green-500 px-5 py-3 font-alt text-sm font-bold text-gray-800 transition-colors hover:bg-green-400"
      >
        CADASTRAR LEMBRANÇA
      </a>
    </div>
  )
}
