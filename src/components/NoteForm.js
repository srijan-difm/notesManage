'use client';

import { useEffect, useState } from 'react';

export default function NoteForm({
  addNote,
  editingNote,
  updateNote,
}) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) return;

    if (editingNote) {
      updateNote(
        editingNote.id,
        title,
        content
      );
    } else {
      addNote(title, content);
    }

    setTitle('');
    setContent('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md p-5 rounded-xl mb-6"
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="w-full border p-3 rounded-lg mb-3"
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) =>
          setContent(e.target.value)
        }
        className="w-full border p-3 rounded-lg mb-3"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-5 py-2 rounded-lg"
      >
        {editingNote
          ? 'Update Note'
          : 'Add Note'}
      </button>
    </form>
  );
}