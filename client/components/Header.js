// components/Header.js
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>BookManager</h1>
      </div>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            {/* Liste des livres */}
            <Link href="/"> Accueil </Link> 
          </li>
          <li>
            <Link href="/books/add-book">Ajouter un Livre</Link>
          </li>
          <li>
            <Link href="/books/delete-book">Supprimer un Livre</Link>
          </li>
          <li>
            <Link href="/books/edit-book">Modifier un Livre</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
