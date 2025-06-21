'use client'
import { useState } from 'react'
import Button from '../../components/ui/Button'
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder login
    router.push('/dashboard')
  }

  return (
    <main className="flex items-center justify-center h-screen p-4">
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button className="w-full" type="submit">Sign In</Button>
      </form>
    </main>
  )
}
