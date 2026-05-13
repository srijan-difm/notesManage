import { NextResponse } from "next/server";
import db from "@/lib/db";

// GET all notes
export async function GET() {
  try {
    const [rows] = await db.query(
      "SELECT * FROM note3_app ORDER BY created_at DESC"
    );

    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// CREATE note
export async function POST(request) {
  try {
    const body = await request.json();

    const { title, content } = body;

    const [result] = await db.query(
      "INSERT INTO note3_app (title, content) VALUES (?, ?)",
      [title, content]
    );

    return NextResponse.json({
      id: result.insertId,
      title,
      content,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}