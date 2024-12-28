export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl.pathname.startsWith("/admin");
      const isOnBlogPage = request.nextUrl.pathname.startsWith("/blog");
      const isOnLoginPage = request.nextUrl.pathname.startsWith("/login");

      //sadece admin admin sayfasını görebilir

      if (isOnAdminPanel && !user?.isAdmin) {
        return false;
      }

      //sadece giriş yapmış kullanıcı blog sayfasını görebilir

      if (isOnBlogPage && !user) {
        return false;
      }

      //sadece giriş yapmamış kullanıcı login sayfasını görebilir

      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      //diger tum herkes her sayfayı görebilir
      return true;
    },
  },
};
