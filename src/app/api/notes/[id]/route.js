import pool from "@/lib/db";
 
export async function PUT(req, { params }) {
  try {
    const { title, content } = await req.json();
 
    await pool.query(
      "UPDATE notes SET title=?, content=? WHERE id=?",
      [title, content, params.id]
    );
 
    return Response.json({ message: "Note updated" });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
 
export async function DELETE(req, { params }) {
  try {
    await pool.query("DELETE FROM notes WHERE id=?", [params.id]);
 
    return Response.json({ message: "Note deleted" });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}