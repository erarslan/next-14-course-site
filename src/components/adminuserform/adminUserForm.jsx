"use client";

import { addUser } from "@/lib/actions";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form action={formAction} className="postform">
      <h1>Add new user</h1>
      <input
        type="text"
        name="username"
        placeholder="username"
        className="text-black"
      />
      <input
        type="text"
        name="email"
        placeholder="email"
        className="text-black"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        className="text-black"
      />
      <input type="text" name="img" placeholder="img" className="text-black" />
      <select name="isAdmin" className="text-black">
        <option value="">Select role</option>
        <option value="false">User</option>
        <option value="true">Admin</option>
      </select>
      <button>Add user</button>
      {state && state.error}
    </form>
  );
};

export default AdminUserForm;
