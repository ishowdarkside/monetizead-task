import styles from "./RegisterForm.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RegisterFormValues } from "../../../types";
import { registerService } from "../../../services/auth";
import toast from "react-hot-toast";

export function RegisterForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormValues>();

  const navigate = useNavigate();

  const handleRegister = async (data: RegisterFormValues) => {
    const res = await registerService(data);
    if (res && res.status === "fail") return toast.error(res.message);
    if (res && res.status === "success") {
      toast.success(res.message);
      return navigate("/");
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit((data) => handleRegister(data))}
    >
      <div className={styles.fieldWrapper}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="johndoe"
          id="username"
          {...register("username", {
            required: "Please provide username",
            minLength: {
              value: 3,
              message: "Username must include at least 3 characters",
            },
            maxLength: {
              value: 20,
              message: "Username can't include more than 20 characters",
            },
          })}
        />
        {errors.username && (
          <p className={styles.errorMsg}>{errors.username.message}</p>
        )}
      </div>

      <div className={styles.fieldWrapper}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="********"
          id="password"
          {...register("password", {
            required: "Please provide password",
            minLength: {
              value: 6,
              message: "Password must include at least 6 characters",
            },
            maxLength: {
              value: 20,
              message: "Password can't include more than 20 characters",
            },
          })}
        />
        {errors.password && (
          <p className={styles.errorMsg}>{errors.password.message}</p>
        )}
      </div>

      <div className={styles.fieldWrapper}>
        <label htmlFor="repeatPassword">Repeat password</label>
        <input
          type="password"
          placeholder="********"
          id="repeatPassword"
          {...register("repeatPassword", {
            required: "Please repeat password",
            validate: function (data) {
              if (data !== watch("password"))
                return "Passwords are not matching";
            },
          })}
        />
        {errors.repeatPassword && (
          <p className={styles.errorMsg}>{errors.repeatPassword.message}</p>
        )}
      </div>

      <div className={styles.fieldWrapper}>
        <label htmlFor="yearOfBirth">Birth year</label>
        <input
          type="date"
          id="yearOfBirth"
          {...register("yearOfBirth", {
            required: "Please provide birth date",
          })}
        />
        {errors.yearOfBirth && (
          <p className={styles.errorMsg}>{errors.yearOfBirth.message}</p>
        )}
      </div>

      <div className={styles.newsletterWrapper}>
        <label htmlFor="subscribeToNewsLetter">Subscribe to newsletter</label>
        <input
          type="checkbox"
          id="subscribeToNewsLetter"
          {...register("subscribeToNewsLetter")}
        />
      </div>

      <div className={styles.fieldWrapper}>
        <span>Gender</span>
        <div className={styles.radiosWrapper}>
          <label>
            <input
              type="radio"
              value="male"
              {...register("gender", { required: "Please provide gender" })}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              value="female"
              {...register("gender", { required: "Please provide gender" })}
            />
            Female
          </label>

          <label>
            <input
              type="radio"
              value="other"
              {...register("gender", { required: "Please provide gender" })}
            />
            Other
          </label>
        </div>
        {errors.gender && (
          <p className={styles.errorMsg}> {errors.gender.message}</p>
        )}
      </div>

      <div className={`${styles.fieldWrapper} ${styles.statusWrapper}`}>
        <label>Status</label>
        <select {...register("status", { required: "Please provide status" })}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        {errors.status && (
          <p className={styles.errorMsg}>{errors.status.message}</p>
        )}
      </div>
      <span>
        Already have an account?{" "}
        <Link to="/auth/login" className={styles.redirectLink}>
          Login here
        </Link>
      </span>
      <button type="submit">REGISTER </button>
    </form>
  );
}
