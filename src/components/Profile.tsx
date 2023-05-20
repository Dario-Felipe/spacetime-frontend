import Image from 'next/image'
import getUser from '@/lib/auth'

export function Profile() {
  const user = getUser()

  return (
    <div className="flex h-10 w-full items-center gap-3 text-left text-gray-50">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
        <Image
          src={user.avatarUrl}
          width={40}
          height={40}
          alt="user image"
          className="h-10 w-10 rounded-full"
        />
      </div>

      <p className="text-md w-[140px] leading-snug">
        {user.name}

        <a
          href=""
          className="block text-sm text-red-600 transition-colors hover:text-red-700"
        >
          Deseja deslogar?
        </a>
      </p>
    </div>
  )
}
