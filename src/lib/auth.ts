import jwtDecode from 'jwt-decode'
import { cookies } from 'next/dist/client/components/headers'

type User = {
  name: string
  avatarUrl: string
  sub: string
}

export default function getUser(): User {
  const token = cookies().get('token')?.value

  if (!token) {
    throw new Error('Unauthenticated')
  }

  const user: User = jwtDecode(token)

  return user
}
