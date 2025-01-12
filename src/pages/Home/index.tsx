import React, { useEffect } from "react";
import api from '../../service/api'
import * as S from './styles'


export function Home() {

  useEffect(() => {
    async function getAllPokemons() {
      const response = await api.get('/pokemon')
      console.log(response)
      //const { results } = response.data
    }

    getAllPokemons()
  },[])

  return(
    <S.Container>

    </S.Container>
  )
}