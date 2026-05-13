'use client';

import axios from 'axios';

import {
  useEffect,
  useState,
} from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { setNotes } from '@/redux/notesSlice';

import NoteCard from '@/components/NoteCard';
import NoteForm from '@/components/NoteForm';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  const dispatch = useDispatch();

  const notes = useSelector(
    (state) => state.notes.notes
  );

  const [search, setSearch] = useState('');

  const [editingNote, setEditingNote] =
    useState(null);

    
const fetchNotes = async () => {
  try {
    const res = await axios.get("/api/notes");

    console.log(res.data);

    dispatch(setNotes(res.data));
  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    fetchNotes();
  }, []);

const addNote = async (title, content) => {
  try {
    await axios.post('/api/notes', {
      title,
      content,
    });

    fetchNotes();
  } catch (error) {
    console.log(error);
  }
};


  const deleteNote = async (id) => {
    await axios.delete(`/api/notes/${id}`);

    fetchNotes();
  };

  const updateNote = async (
    id,
    title,
    content
  ) => {
   await axios.put(`/api/notes/${id}`, {
  title,
  content,
});

    setEditingNote(null);

    fetchNotes();
  };

const filteredNotes = notes.filter(
  (note) =>
    (note.title || "")
      .toLowerCase()
      .includes((search || "").toLowerCase())
);
  return (
    <main className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Notes Management App
        </h1>

        <NoteForm
          addNote={addNote}
          editingNote={editingNote}
          updateNote={updateNote}
        />

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

<div className="grid md:grid-cols-2 gap-5">
  {filteredNotes.map((note) => (
    <NoteCard
      key={note.id}
      note={note}
      onDelete={deleteNote}
      onEdit={setEditingNote}
    />
  ))}
</div>
      </div>
    </main>
  );
}