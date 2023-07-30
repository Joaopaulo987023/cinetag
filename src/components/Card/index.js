import React from 'react';
import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png";
import iconeDesfavoritar from "./desfavoritar.png";
import { useFavoritoContext } from 'context/Favoritos';
import { Link } from 'react-router-dom';
export default function Card({capa, titulo, id}) {
  
  const {favoritos,adicionarFavorito} = useFavoritoContext();
  const ehFavorito = favoritos.some((fav)=>fav.id===id); // 
  const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;

  return (
    <div className={styles.container}>
        <Link className={styles.link} to={`/${id}`}>
          <img src={capa} alt={`imagem de capa do ${titulo}`} className={styles.capa}/>
          <h2>{titulo}</h2>
        </Link>
       
        <img src={icone} alt="Favoritar Filme" 
        className={styles.favoritar}
        onClick={()=>{
          adicionarFavorito({id,titulo,capa})
        }}
        />
    </div>
  )
}
