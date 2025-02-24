import { NextResponse } from "next/server";
import { auth } from "@/config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { FirebaseError } from "firebase/app";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return NextResponse.json({ user: userCredential.user });
  } catch (error) {
    if (error instanceof FirebaseError) {
      // Now `error` is typed as `FirebaseError`, and you can safely access its `message`.
      return NextResponse.json({ error: error.message }, { status: 400 });
    } else {
      // Handle other unexpected error types.
      return NextResponse.json(
        { error: "An unexpected error occurred." },
        { status: 500 }
      );
    }
  }
}
