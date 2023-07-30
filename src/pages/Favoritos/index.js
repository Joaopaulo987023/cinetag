import Banner from 'components/Banner';
import Card from 'components/Card';
import Titulo from 'components/Titulo';
import { useFavoritoContext } from 'context/Favoritos';
import React from 'react';
import styles from "./Favoritos.module.css";

export default function Favoritos() {
  const {favoritos}=useFavoritoContext();
  return (
    <>
      <Banner imagem="favoritos"/>
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favoritos.map((fav)=>{
          return <Card {...fav} key={fav.id}/>
        })}
      {/* criando um card que recebe os valores capa id e titulo como prop  */}
      {/* passamos ele com {...fav} que é um forma de passar todos esse valores para as props */}
      </section>

    </>
  )
}
