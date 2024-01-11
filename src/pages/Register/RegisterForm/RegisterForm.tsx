import styles from "./RegisterForm.module.scss";
export function RegisterForm(): JSX.Element {
  return (
    <form className={styles.form}>
      <div className={styles.fieldWrapper}>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="johndoe" id="username" />
      </div>

      <div className={styles.fieldWrapper}>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="********" id="password" />
      </div>

      <div className={styles.fieldWrapper}>
        <label htmlFor="repeatPassword">Repeat password</label>
        <input type="password" placeholder="********" id="repeatPassword" />
      </div>

      <div className={styles.fieldWrapper}>
        <label htmlFor="yearOfBirth">Birth year</label>
        <input type="date" id="yearOfBirth" />
      </div>

      <div className={styles.newsletterWrapper}>
        <label htmlFor="subscribeToNewsLetter">Subscribe to newsletter</label>
        <input type="checkbox" id="subscribeToNewsLetter" />
      </div>

      <div className={styles.fieldWrapper}>
        <span>Gender</span>
        <div className={styles.radiosWrapper}>
          <label>
            <input type="radio" name="gender" value="male" />
            Male
          </label>

          <label>
            <input type="radio" name="gender" value="female" />
            Female
          </label>

          <label>
            <input type="radio" name="gender" value="other" />
            Other
          </label>
        </div>
      </div>

      <div className={`${styles.fieldWrapper} ${styles.statusWrapper}`}>
        <label>Status</label>
        <select>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <button type="submit">REGISTER </button>
    </form>
  );
}
