import { Outlet } from 'react-router-dom';
import styles from './Container.module.css';
import React from 'react'
import Cabecalho from 'components/Cabecalho';
import Rodape from 'components/Rodape';
import FavoritosProvider from 'context/Favoritos';

export default function Container() {
  return (
    <section className={styles.container}>
       <Cabecalho/>
        <FavoritosProvider>
            <Outlet/>
        </FavoritosProvider> 
        <Rodape/>
    </section>
  )
}
