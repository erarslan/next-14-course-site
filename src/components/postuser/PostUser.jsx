import { getUser } from "@/lib/data";
import Image from "next/image";

// const getData = async (id) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// };

const PostUser = async ({ userId }) => {
  // const user = await getData(userId);

  const user = await getUser(userId);

  return (
    <div className="flex gap-2.5">
      <div className="relative w-14 h-14">
        <Image
          src={user.img ? user.img : "/noavatar.png"}
          alt="avatar image"
          className="rounded-full object-cover"
          fill
        />
      </div>
      <div className="mini-card">
        <span className="font-bold">Author</span>
        <span>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
