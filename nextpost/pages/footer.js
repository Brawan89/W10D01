import styles from "./../styles/Home.module.css";
import Image from 'next/image'


const Footer = () => {
  return (
    <footer className={styles.footer}>
        
        Copyright © 2021 
          <span className={styles.logo}>
            <Image src="/logo1.png" height={20} width={20} />
          </span>
      
      </footer>
  );
};

export default Footer;