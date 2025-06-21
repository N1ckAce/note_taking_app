import { sampleNotes } from '../../lib/sample-notes'
import NoteCard from '../../components/NoteCard'
import Button from '../../components/ui/Button'
import Link from 'next/link'

export default function Dashboard() {
  const notes = sampleNotes
  return (
    <main className="p-6 max-w-3xl mx-auto space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your Notes</h1>
        <Link href="/note/new">
          <Button>New Note</Button>
        </Link>
      </div>
      {notes.length === 0 ? (
        <p className="text-gray-500">No notes yet. Start by creating one!</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      )}
    </main>
  )
}
