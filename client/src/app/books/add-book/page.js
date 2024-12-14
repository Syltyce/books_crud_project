import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import styles from "./AddBookForm.module.css";  


export default function AddBook() {
  return (
    <div>
      <Header />

      <div className={styles['form-container']}>
      <h1 className={styles.title}>Ajouter un livre</h1>
      <form>
        <label htmlFor="title"> Titre : </label>
        <input type="text" name="title" id="title" className={styles.input} />

        <label htmlFor="author"> Auteur : </label>
        <input type="text" name="author" id="author" className={styles.input} />

        <label htmlFor="cover">Couverture :</label>
        <input type="file" name="cover" id="cover" className={styles.input} />

        <button type="submit" className={styles.button}> Ajouter </button>
      </form>
      </div>

      <Footer />
    </div>
  );
}
