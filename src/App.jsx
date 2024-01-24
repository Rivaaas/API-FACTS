import React from 'react'
import { useState, useEffect } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact"
const CAT_ENDPOINT_IMAGE_URL = "https://cataas.com/cat/says/hello"


export function App() {

  const [fact, setFact] = useState("ESTADO INICIAL GREEN")
  const [image, setImage] = useState()


  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
        const firstWord = fact.split(" ", 3).join(" ")
        console.log(firstWord)
        
        setImage(`https://cataas.com/cat/says/${firstWord}?size=50&fontColor=red&width=500&height=500`)
         console.log("ACA ESTA EL URL DE IMAGE",image)    
      })
  }, [])


  return (
    <main style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {image && <img src={image} alt={`Imagen de esto cualquier ${fact}`} />}
    </main>
  )
}