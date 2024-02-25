import React, { useContext, useEffect } from "react";
import SearchPeople from '../searchPeople/searchPeople'
import GlobalContext from "../../context/globalContext";
import StartWartService from "../../services/starWarsService";


const HomePage = () => {

  /* Funcion de global context */

  const globalState = useContext(GlobalContext)

  const { peoples,setPeoples,pictures}= globalState

  /*  */


  useEffect(() => {
    getPeople();
    
  }, []);

  const getPeople = async () => {
    const res = await StartWartService.getStarWarsPeople();
    
    const data = res.data.results 

   let newPeople=[]
   
   data.map((dat, i)=>{
  
      pictures.map((pict, i)=>{
        if(dat.name === pict.name){
          const dat1={...dat,imgUrl:pict.imgUrl }
          newPeople=[...newPeople,dat1]
 
        }

      })
      
    })
  
    setPeoples(newPeople);
  };

  return (
    <div>     
       <SearchPeople/>
    </div>
  )
}

export default HomePage
