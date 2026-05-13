import { NextResponse } from "next/server";
import db from "@/lib/db";

// UPDATE note
export async function PUT(request, context) {
  try {
    const params = await context.params;
    const id = params.id;

    const body = await request.json();
    const { title, content } = body;

    await db.query(
      "UPDATE note3_app SET title=?, content=? WHERE id=?",
      [title, content, id]
    );

    return NextResponse.json({
      success: true,
      message: "Note updated",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// DELETE note
export async function DELETE(request, context) {
  try {
    const params = await context.params;
    const id = params.id;

    await db.query(
      "DELETE FROM note3_app WHERE id=?",
      [id]
    );

    return NextResponse.json({
      success: true,
      message: "Note deleted",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}