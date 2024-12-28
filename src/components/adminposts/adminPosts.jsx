import { deletePost } from "@/lib/actions";
import { getPosts } from "@/lib/data";
import Image from "next/image";

const AdminPosts = async () => {
  const posts = await getPosts();

  return (
    <div className="posts">
      <h1>Posts</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <div className="detail">
            <Image
              src={post.img || "/noavatar.png"}
              alt="post image"
              width={50}
              height={50}
            />
            <span className="postTitle">{post.title}</span>
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button className="postButton">Delete post</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
