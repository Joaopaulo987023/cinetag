
import React, { useEffect, useState } from 'react';
import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import Card from 'components/Card';
import styles from './Inicio.module.css'



export default function Inicio() {
  const[videos, setVideos]=useState([]);
  useEffect(()=>{
      fetch("https://my-json-server.typicode.com/Joaopaulo987023/cinetag-api/videos")
      .then(resp => resp.json())
      .then(data => setVideos(data))
  },[])
  return (
    <>
      <Banner imagem='home'/>
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      {/* criando um section para poder estilizar o card e deixar eles organizados */}
      <section className={styles.container}>
        {videos.map((video)=>{
          return <Card {...video} key={video.id}/>
        })}
        {/* {...video} faz com que eu espalhe minhas propriedades estao dentro do arquivo json */}
        {/* essas propriedades são as props que o componente Card precisa */}
      </section>
      
    
    </>
    
    

  )
}
