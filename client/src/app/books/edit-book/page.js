import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";

export default function UpdateBook() {
    return (
      <div>

        <Header />

        <h1>Modifier un livre</h1>
        <form>
          <label>Titre :</label>
          <input type="text" name="title" />
          <br />
          <label>Auteur :</label>
          <input type="text" name="author" />
          <br />
          <button type="submit">Modifier</button>
        </form>

        <Footer />

      </div>
    );
  }
  