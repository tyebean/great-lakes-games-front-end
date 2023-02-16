import styles from '../Footer/Footer.module.css'
// import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <p className={styles.api}>The API</p>
        <a className={styles.rawg} rel="noreferrer" target="_blank" href="http://rawg.io/">rawg.io</a>
      </footer>
    </>
  );
}

export default Footer;