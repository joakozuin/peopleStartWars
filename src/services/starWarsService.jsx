import Axios from "axios"
import Global from '../api/global'

const url = Global.url

const Service = {

    /* Obtenemos todos */
    getStarWarsPeople: async()=>{
        const data = await Axios.get(url + `/people`)
        return data
    },
/* Obtenemos el id */
    getStarWarsPeopleId: async(id)=>{
        const data = await Axios.get(url + `/${id}`)
        return data
    },

}

export default Service