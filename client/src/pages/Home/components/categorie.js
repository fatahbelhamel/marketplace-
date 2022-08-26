import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

function Categories(props){

  const [categories, setCategories] = useState('');
  const [message, setMessage] = useState('');

  const getCategories = async()=>{
    try{
      const response = await axios.get("http://localhost:5000/category");
      setCategories(response.data.categories);

    }catch(error){
      if(error.response){

      }
    }
  }

  getCategories();

const imagePath = "/images/";
const path ="/products/";

	return(
  <>
     <h4 class="categorie-title">Principales catégories de ce mois</h4>
     <div class="categories container"> 
     {Object.values(categories).map((categorie, index) => (
        <div class="categorie" key={index}>
          <img src={imagePath + categorie.Img_cat}/>
          <Link to={path + categorie.Nom_cat}><h5 class="categorie-name">{categorie.Nom_cat}</h5></Link>
        </div>
      ))}  
      </div>
  </>    
		)
}
export default Categories;