"use client"; 

import { useEffect, useState } from "react";
import axios from "axios";

function BooksList() {
  // Etat pour stocker la liste des livres
  const [books, setBooks] = useState([]);

  // Utiliser useEffect pour appeler l'API et récupérer les livres au chargement du composant
  useEffect(() => {
    // Fonction pour récupérer les livres depuis le backend
    const fetchBooks = async () => {
      try {
        const response = await axios("http://localhost:8800/books");
        console.log(response.data);
        setBooks(response.data)

      } catch (error) {
        console.error("Erreur lors de la récupération des livres : ", error);
      }
    };

    fetchBooks();
  }, []); // Le tableau vide [] indique que cela s'exécute une seule fois lors du montage

  return (
    <div>
      <h1>Liste des livres</h1>
      <ul>
        {books.length > 0 ? (
          books.map((book) => (
            <li key={book.id}>
              <h2>{book.title}</h2>
              <p>Description: {book.desc}</p>
              {book.cover && (
                <img
                  src={book.cover}
                  alt={book.title}
                  style={{ width: "100px", height: "auto" }}
                />
              )}
            </li>
          ))
        ) : (
          <p>Aucun livre trouvé</p>
        )}
      </ul>
    </div>
  );
}

export default BooksList;
