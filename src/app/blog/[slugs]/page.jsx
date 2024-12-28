import PostUser from "@/components/postuser/PostUser";
import { getPost } from "@/lib/data";
import Image from "next/image";
import { Suspense } from "react";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const { slugs } = params;
  const post = await getData(slugs);

  return { title: post.title, description: post.desc };
};

const SinglePostPage = async ({ params }) => {
  const { slugs } = params;

  const post = await getData(slugs);

  // const post = await getPost(slug);

  return (
    <div className="flex gap-[100px]">
      {post.img && (
        <div className="flex-1 relative h-[calc(100vh-200px)] max-md:hidden">
          <Image
            src={post.img}
            alt="blog single page image"
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="flex-2 flex flex-col gap-[50px] ">
        <h1 className="text-[64px]">{post.title}</h1>
        <div className="flex gap-5">
          <Suspense fallback={<div>Yukleniyor...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className="mini-card">
            <span className="font-bold">Published</span>
            <span>01.01.2024</span>
          </div>
        </div>
        <div>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
