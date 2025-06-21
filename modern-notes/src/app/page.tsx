import Link from 'next/link'
import Button from '../components/ui/Button'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center flex-1 p-8 text-center gap-4">
      <h1 className="text-4xl font-bold mb-4">Modern Notes</h1>
      <p className="text-gray-600 mb-8">A simple place to jot down your thoughts.</p>
      <Link href="/dashboard">
        <Button>Go to Dashboard</Button>
      </Link>
    </main>
  )
}
