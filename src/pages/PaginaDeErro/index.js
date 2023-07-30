import React from 'react'
import styles from "./PaginaDeErro.module.css"
export default function PaginaDeErro() {
  return (
    <section className={styles.container}>
        <h2>Ops!</h2>
        <p>O conteúdo que você procura não foi encontrado!</p>
    </section>
  )
}
