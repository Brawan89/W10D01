import Link from "next/link";
import styles from "./../../styles/NavBar.module.css";
import Image from 'next/image'


const NavBar = () => {
  return (
    <ul className={styles.NavBar}>
      <Image src="/logo1.png" height={50} width={50}></Image>
      <Link href="/">
        <li>Home</li>
      </Link>
      <Link href="/about">
        <li>About</li>
      </Link>
      <Link href="/contact">
       
        <li>Contact</li>
      </Link>
      <Link href="/posts">
        
        <li>Posts</li>
      </Link>
    </ul>
  );
};

export default NavBar;