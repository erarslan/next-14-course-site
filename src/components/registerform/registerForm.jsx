"use client";

import { register } from "@/lib/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form action={formAction}>
      <input
        type="text"
        placeholder="username"
        name="username"
        className="text-black"
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        className="text-black"
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        className="text-black"
      />
      <input
        type="password"
        placeholder="password again"
        name="passwordRepeat"
        className="text-black"
      />
      <br />
      <button>Register</button>
      <br />
      {state?.error}
      <br />
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
