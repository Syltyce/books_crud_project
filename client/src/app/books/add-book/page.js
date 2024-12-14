"use client";  // Ajoutez cette ligne au début du fichier

import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import styles from "./AddBookForm.module.css";  
import axios from "axios";
import { useState } from "react";



export default function AddBook() {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [cover, setCover] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Envoi des données vers le backend
          await axios.post('http://localhost:8800/books', {
            title,
            desc,
            cover
          });
    
          alert('Livre ajouté avec succès');
        } catch (error) {
          console.error('Erreur lors de l\'ajout du livre', error);
          alert('Erreur lors de l\'ajout du livre');
        }
      };

  return (
    <div>
      <Header />

      <div className={styles['form-container']}>
      <h1 className={styles.title}>Ajouter un livre</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title"> Titre : </label>
        <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
        />

        <label htmlFor="desc"> Description : </label>
        <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
        />

        <label htmlFor="cover">Couverture :</label>
        <input
            type="text"
            value={cover}
            onChange={(e) => setCover(e.target.value)}
            required
        />

        <button type="submit" className={styles.button}> Ajouter </button>
      </form>
      </div>

      <Footer />
    </div>
  );
}
