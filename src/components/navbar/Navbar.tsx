import Link from "next/link";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.container}>
      <Link href="/">
        <p>Home</p>
      </Link>
      <Link href="/blog">
        <p>Blog</p>
      </Link>
    </div>
  );
};

export default Navbar;
