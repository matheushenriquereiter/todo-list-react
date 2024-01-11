import {
  header,
  container,
  subContainer,
  title,
  subTitle,
  profileImage,
} from "./styles.module.css";

export const Header = () => {
  return (
    <header className={header}>
      <div className={container}>
        <div className={subContainer}>
          <h1 className={title}>to do list</h1>
          <h2 className={subTitle}>get stuff done, stop procrastinating.</h2>
        </div>

        <img
          className={profileImage}
          src="/public/amogus.jpeg"
          alt="profile image"
        />
      </div>
    </header>
  );
};
