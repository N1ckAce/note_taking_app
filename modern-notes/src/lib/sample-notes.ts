export interface Note {
  id: string
  title: string
  content: string
}

export const sampleNotes: Note[] = [
  {
    id: '1',
    title: 'First Note',
    content: 'This is an example note.'
  },
  {
    id: '2',
    title: 'Another Note',
    content: 'More sample content goes here.'
  },
  {
    id: '3',
    title: 'Last Note',
    content: 'Final sample note.'
  }
]
