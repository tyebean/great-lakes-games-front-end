import styles from '../Footer/Footer.module.css'

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        {/* <div className={styles.bigFlex}> */}

          <div className={styles.projectFlex}>
            <p>The Project</p>
            {/* <p>1</p>
            <p>2</p> */}
          </div>

          <div className={styles.findUsFlex}>
            <p>Find Us</p>
            <p>Joseph</p>
            <img 
            src="/assets/github_logo.png" 
            width="40" 
            height="40"
            className={styles.hubImg}
            alt="github logo"></img>
            <img 
            src="/assets/linkedin_logo.png" 
            width="40" 
            height="40"
            className={styles.linkImg}
            alt="github logo"></img>
            <p>Dan</p>
            <img 
            src="/assets/github_logo.png" 
            width="40" 
            height="40"
            className={styles.hubImg}
            alt="github logo"></img>
            <img 
            src="/assets/linkedin_logo.png" 
            width="40" 
            height="40"
            className={styles.linkImg}
            alt="github logo"></img>
            <p>Tye</p>
            <img 
            src="/assets/github_logo.png" 
            width="40" 
            height="40"
            className={styles.hubImg}
            alt="github logo"></img>
            <img 
            src="/assets/linkedin_logo.png" 
            width="40" 
            height="40"
            className={styles.linkImg}
            alt="github logo"></img>
          </div>


          <div className={styles.apiFlex}>
            <p>The API</p>
            <p>RAWG.io</p>
          </div>

        {/* </div> */}
      </footer>
    </>
  );
}

export default Footer;