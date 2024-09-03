import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  // Dummy check - replace with real authentication logic
  if (email === "user@example.com" && password === "password") {
    return NextResponse.json({
      message: "Login successful",
      token: "dummy-token",
    });
  } else {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }
}
