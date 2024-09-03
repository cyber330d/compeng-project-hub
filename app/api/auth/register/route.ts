import { NextRequest, NextResponse } from "next/server";

let users: any[] = []; // Temporary in-memory storage for users

export async function POST(request: NextRequest) {
  const newUser = await request.json();
  const userExists = users.some((user) => user.email === newUser.email);

  if (userExists) {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 400 }
    );
  }

  newUser.id = users.length + 1;
  users.push(newUser);
  return NextResponse.json({
    message: "User registered successfully",
    user: newUser,
  });
}
