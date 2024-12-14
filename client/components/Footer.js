// components/Footer.js
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; {new Date().getFullYear()} BookManager. Tous droits réservés.</p>
        <ul className={styles.footerLinks}>
          <li>
            <a href="/terms">Conditions d'utilisation</a>
          </li>
          <li>
            <a href="/privacy">Politique de confidentialité</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
