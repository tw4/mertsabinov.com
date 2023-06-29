import Link from "next/link";
import style from "./Navbar.module.css";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className={style.container}>
      <p>Mert Sabinov</p>
      <div className={style.navbarItemContainer}>
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="https://medium.com/@mertsabinov">
          <p>Blog</p>
        </Link>
      </div>
      <div className={style.navbarItemContainer}>
        <Link
          href="https://github.com/mertsabinov/mertsabinov.com"
          className={style.navbarItemContainer}>
          <p>GitHub</p>
          <FaGithub size={20} style={{ marginLeft: "5%" }} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
