import PostCard from "@/components/postcard/PostCard";
import { getPosts } from "@/lib/data";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const BlogPage = async () => {
  // const posts = await getPosts();
  const posts = await getData();

  return (
    <div className="flex flex-wrap gap-5 mt-6">
      {posts.map((post) => (
        <PostCard post={post} key={post._id} />
      ))}
    </div>
  );
};

export default BlogPage;
