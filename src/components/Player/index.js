import Banner from 'components/Banner'
import styles from './Player.module.css'
import Titulo from 'components/Titulo'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import PaginaDeErro from 'pages/PaginaDeErro'
export default function Player() {
    const parametros = useParams();
    const[video,setVideo] = useState();
    useEffect(()=>{
      fetch(`https://my-json-server.typicode.com/Joaopaulo987023/cinetag-api/videos?id=${parametros.id}`)
      //filtrando id usando ? id = 
      .then( resp => resp.json())
      .then(data => setVideo(...data)
      )
    },[])
    //fazendo isso a url que retornamos contem o id do video correto

    
    //Se não ouver video ou seja tem uma url valida é mostrado a pagina de erro
    if(!video){
      return <PaginaDeErro/>
    }
  return (
    <>
        <Banner imagem="player"/>
          <Titulo>
            <h1>Player</h1>
          </Titulo>
        
        <section className={styles.container}>
          <iframe width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </section>
        

    </>
  )
}
