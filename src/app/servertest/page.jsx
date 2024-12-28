import { addPost, deletePost } from "@/lib/actions";

const Server = () => {
  return (
    <div className="space-y-4">
      <form action={addPost}>
        <input
          type="text"
          placeholder="title"
          className="text-black"
          name="title"
        />
        <input
          type="text"
          placeholder="desc"
          className="text-black"
          name="desc"
        />
        <input
          type="text"
          placeholder="slug"
          className="text-black"
          name="slug"
        />
        <input
          type="text"
          placeholder="userId"
          className="text-black"
          name="userId"
        />
        <button>Create a Post</button>
      </form>

      <form action={deletePost}>
        <input
          type="text"
          placeholder="post id (yeah we should change this to slug)"
          className="text-black"
          name="id"
        />
        <button>Delete a Post</button>
      </form>
    </div>
  );
};

export default Server;
