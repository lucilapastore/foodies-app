import logoImg from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

import MainHeaderBackground from "./main-header-background"; // Adjust the path as necessary
import classes from "./main-header.module.css";
import NavLink from "./nav-links";
export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          Next Level Meals
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
