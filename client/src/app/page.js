import Header from '/components/Header';
import Footer from '/components/Footer';
import BooksList from '../../components/BooksList';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <h2> Bienvenue dans le gestionnaire de livres ! </h2>
        {/* Contenu principal de la page */}
        <BooksList />
      </main>
      <Footer />
    </div>
  );
}
