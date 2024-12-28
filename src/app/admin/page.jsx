import AdminPostForm from "@/components/adminpostform/adminPostForm";
import AdminPosts from "@/components/adminposts/adminPosts";
import AdminUserForm from "@/components/adminuserform/adminUserForm";
import AdminUsers from "@/components/adminusers/adminUsers";
import { auth } from "@/lib/auth";
import { Suspense } from "react";

const AdminPage = async () => {
  const session = await auth();

  return (
    <div className="con-admin">
      <div className="row">
        <div className="col">
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className="col">
          <AdminPostForm userId={session.user.id} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className="col">
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
