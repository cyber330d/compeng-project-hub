import { NextRequest, NextResponse } from "next/server";

let blogs: any[] = []; // Temporary in-memory storage for blogs

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const blog = blogs.find((b) => b.id === parseInt(params.id));
  if (!blog) {
    return NextResponse.json({ message: "Blog not found" }, { status: 404 });
  }
  return NextResponse.json({ blog });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const updatedBlog = await request.json();
  const blogIndex = blogs.findIndex((b) => b.id === parseInt(params.id));
  if (blogIndex === -1) {
    return NextResponse.json({ message: "Blog not found" }, { status: 404 });
  }
  blogs[blogIndex] = { ...blogs[blogIndex], ...updatedBlog };
  return NextResponse.json({
    message: "Blog updated successfully",
    blog: blogs[blogIndex],
  });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const blogIndex = blogs.findIndex((b) => b.id === parseInt(params.id));
  if (blogIndex === -1) {
    return NextResponse.json({ message: "Blog not found" }, { status: 404 });
  }
  const deletedBlog = blogs.splice(blogIndex, 1);
  return NextResponse.json({
    message: "Blog deleted successfully",
    blog: deletedBlog,
  });
}
