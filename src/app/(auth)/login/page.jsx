import LoginForm from "@/components/loginform/loginForm";
import { handleGithubLogin } from "@/lib/actions";

const LoginPage = () => {
  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with Github</button>
      </form>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
