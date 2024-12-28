"use client";

import { login } from "@/lib/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();

  return (
    <form action={formAction}>
      <input
        type="text"
        placeholder="username"
        name="username"
        className="text-black"
      />

      <input
        type="password"
        placeholder="password"
        name="password"
        className="text-black"
      />
      <br />
      <button>Login</button>
      <br />
      {state?.error}
      <br />
      <Link href="/register">
        Don't have an account? <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
