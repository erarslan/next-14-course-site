import { deleteUser } from "@/lib/actions";
import { getUsers } from "@/lib/data";
import Image from "next/image";

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div className="users">
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <div>
            <Image
              src={user.img || "/noavatar.png"}
              alt="avatar"
              width={50}
              height={50}
            />
            <span>{user.username}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <button>Delete user</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
