import Link from 'next/link'
import { Note } from '../lib/sample-notes'

interface Props {
  note: Note
}

export default function NoteCard({ note }: Props) {
  return (
    <Link href={`/note/${note.id}`}
      className="block p-4 rounded-lg shadow hover:shadow-md transition bg-white">
      <h3 className="font-semibold text-lg mb-1">{note.title}</h3>
      <p className="text-sm text-gray-600 truncate">{note.content}</p>
    </Link>
  )
}
