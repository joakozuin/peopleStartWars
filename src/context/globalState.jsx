import React, { useState } from 'react'

import GlobalContext from './globalContext'

const GlobalState = (props) => {

    const [pictures, setPictures]= useState([
      {
      name:'Luke Skywalker',
      imgUrl: '/img/Luke Skywalker.jpg' 
    },
    {
      name:'C-3PO',
      imgUrl: '/img/C-3PO.jpg' 
    },
    {
      name:'R2-D2',
      imgUrl: '/img/R2-D2.jpg' 
    },
    {
      name:'Darth Vader',
      imgUrl: '/img/Darth Vader.jpg' 
    },
    {
      name:'Leia Organa',
      imgUrl: '/img/Leia Organa.jpg' 
    },
    {
      name:'Owen Lars',
      imgUrl: '/img/Owen Lars.jpg'
    },
    {
      name:'Beru Whitesun lars',
      imgUrl: '/img/Beru Whitesun lars.jpg' 
    },
    {
      name:'R5-D4',
      imgUrl: '/img/R5-D4.jpg'
    },
    {
      name:'Biggs Darklighter',
      imgUrl: '/img/Biggs Darklighter.jpg'
    },
    {
      name:'Obi-Wan Kenobi',
      imgUrl: '/img/Obi-Wan Kenobi.jpg'
    },
  ],)
    const [peoples, setPeoples] = useState([]);
  
    return (
    <>
   {/*  {console.log('Dentro del GlobalState')} */}

    <GlobalContext.Provider
      value={{
        peoples, 
        setPeoples,
        pictures,
        setPictures,
      }}

    >
      {/*que se pasa a los componentes.  */}
       {props.children}

    </GlobalContext.Provider>
    
    </>
    )
}

export default GlobalState