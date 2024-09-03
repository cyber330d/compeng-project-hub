import { NextRequest, NextResponse } from "next/server";

let blogs: any[] = []; // Temporary in-memory storage for blogs

export async function GET(request: NextRequest) {
  return NextResponse.json({ blogs });
}

export async function POST(request: NextRequest) {
  const newBlog = await request.json();
  newBlog.id = blogs.length + 1;
  blogs.push(newBlog);
  return NextResponse.json({
    message: "Blog created successfully",
    blog: newBlog,
  });
}
