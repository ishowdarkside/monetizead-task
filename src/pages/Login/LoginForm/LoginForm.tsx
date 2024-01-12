import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.scss";
import { FormEvent, useRef } from "react";
import { loginService } from "../../../services/auth";
import toast from "react-hot-toast";

export default function LoginForm(): JSX.Element {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (
      !usernameRef.current?.value ||
      !passwordRef.current?.value ||
      usernameRef.current.value.length < 3 ||
      passwordRef.current.value.length < 6
    )
      return;
    const res = await loginService(
      usernameRef.current.value,
      passwordRef.current.value
    );

    if (res?.status === "fail") return toast.error(res.message);

    if (res?.status === "success") {
      toast.success(res.message);
      return navigate("/");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.fieldWrapper}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="johndoe"
          id="username"
          ref={usernameRef}
        />
      </div>

      <div className={styles.fieldWrapper}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="********"
          id="password"
          ref={passwordRef}
        />
      </div>
      <span>
        Don't have an account?{" "}
        <Link to="/auth/register" className={styles.redirectLink}>
          Register here
        </Link>
      </span>
      <button type="submit">Login</button>
    </form>
  );
}
