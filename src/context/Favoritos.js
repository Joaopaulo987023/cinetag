
import React, { createContext, useContext,useState } from 'react';

const FavoritosContext = createContext();
FavoritosContext.displayName= "Favoritos";

export default function FavoritosProvider({children}) {
    const[favoritos,setFavoritos]=useState([]);
  return (
        <FavoritosContext.Provider value={{favoritos, setFavoritos}}>
            {children}
        </FavoritosContext.Provider>
    
  )
}

//criando um hook personalizado para gerar funcionalidades para ele.
export const useFavoritoContext= ()=>{
   const {favoritos,setFavoritos} = useContext(FavoritosContext);
   function adicionarFavorito(novoFavorito){
        const favoritoRepetido = favoritos.some(item=>item.id===novoFavorito.id) //Perguntando se já existe um item igual.. retorna valor boolean
        let novaLista=[...favoritos];
        //se o não tiver favorito repetido eu adiciono ele no fundo da lista com o push
        //e seto em Favoritos
        if(!favoritoRepetido){
            novaLista.push(novoFavorito);
            return setFavoritos(novaLista)
        }
        //Se já existir o favorito eu filtro apenas os elementos que não não iguais e retorno com o set
        novaLista = favoritos.filter((fav) => fav.id !== novoFavorito.id);
        return setFavoritos(novaLista)
   }
   return {
    favoritos,
    adicionarFavorito
   }
}