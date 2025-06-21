'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { sampleNotes, Note } from '../../../lib/sample-notes'
import Button from '../../../components/ui/Button'

interface Params { params: { id: string } }

export default function NoteEditor({ params }: Params) {
  const router = useRouter()
  const existing = sampleNotes.find(n => n.id === params.id)
  const [title, setTitle] = useState(existing?.title || '')
  const [content, setContent] = useState(existing?.content || '')

  const handleSave = () => {
    // Placeholder save logic
    alert('Saved!')
    router.push('/dashboard')
  }

  return (
    <main className="p-6 max-w-3xl mx-auto space-y-4">
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full p-2 text-2xl font-bold border-b focus:outline-none"
      />
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Start writing..."
        className="w-full h-72 p-2 border rounded-md focus:outline-none"
      />
      <Button onClick={handleSave}>Save</Button>
    </main>
  )
}
