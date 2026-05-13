export default function NoteCard({
  note,
  onDelete,
  onEdit,
}) {
  return (
    <div
      style={{
        background: "white",
        padding: "15px",
        borderRadius: "10px",
        boxShadow: "0 0 5px gray",
        marginBottom: "15px",
      }}
    >
      <h2 style={{ fontWeight: "bold" }}>
        {note.title}
      </h2>

      <p>{note.content}</p>

      <p style={{ fontSize: "12px" }}>
        {new Date(
          note.created_at
        ).toLocaleString()}
      </p>

      <div
        style={{
          marginTop: "10px",
          display: "flex",
          gap: "10px",
        }}
      >
        <button
          onClick={() => onEdit(note)}
          style={{
            background: "orange",
            color: "white",
            padding: "8px 12px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(note.id)}
          style={{
            background: "red",
            color: "white",
            padding: "8px 12px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}