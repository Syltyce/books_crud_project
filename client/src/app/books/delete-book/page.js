import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";

export default function DeleteBook() {
    return (
      <div>

        <Header />

        <h1>Supprimer un livre</h1>
        <form>
          <label>ID du livre :</label>
          <input type="text" name="id" />
          <br />
          <button type="submit">Supprimer</button>
        </form>

        <Footer />

      </div>
    );
  }
  