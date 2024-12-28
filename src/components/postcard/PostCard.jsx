import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className="w-[30%] max-md:w-[100%] max-xl:w-[45%]">
      <div className="flex flex-col gap-5 mb-5">
        <div className="flex">
          {post.img && (
            <div className="w-[90%] h-[400px] relative">
              <Image
                src={post.img}
                alt="blog image"
                fill
                className="object-cover"
              />
            </div>
          )}
          <span className="text-[12px] -rotate-90 my-auto">01.01.2024</span>
        </div>
        <div>
          <h1 className="text-[24px] font-bold mb-5 w-[90%]">{post.title}</h1>
          <p className="mb-5 font-light text-gray-200 w-[90%]">{post.desc}</p>
          <Link href={`/blog/${post.slug}`} className="underline">
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
