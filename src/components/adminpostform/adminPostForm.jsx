"use client";

import { addPost } from "@/lib/actions";
import { useFormState } from "react-dom";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form action={formAction} className="postform">
      <h1>Add new Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="text-black"
      />
      <input
        type="text"
        name="slug"
        placeholder="slug"
        className="text-black"
      />
      <input type="text" name="img" placeholder="img" className="text-black" />
      <textarea
        type="text"
        name="desc"
        placeholder="desc"
        rows={10}
        className="text-black"
      />
      <button>Add post</button>
      {state && state.error}
    </form>
  );
};

export default AdminPostForm;
