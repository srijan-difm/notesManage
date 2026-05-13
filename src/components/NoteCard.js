export default function NoteCard({
  note,
  onDelete,
  onEdit,
}) {
return (
  <div className="bg-white p-4 rounded shadow">
    <h2 className="text-xl font-bold">
      {note.title}
    </h2>

    <p className="mt-2 text-gray-600">
      {note.content}
    </p>

    <p className="text-sm text-gray-400 mt-3">
      {new Date(note.created_at).toLocaleString()}
    </p>

    <div className="flex gap-2 mt-4">
      <button
        onClick={() => onEdit(note)}
        className="bg-yellow-500 text-white px-3 py-1 rounded"
      >
        Edit
      </button>

      <button
        onClick={() => onDelete(note.id)}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Delete
      </button>
    </div>
  </div>
);
}