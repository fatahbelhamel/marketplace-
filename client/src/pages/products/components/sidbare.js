import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

axios.defaults.withCredentials = true;

function Sidbare(){

    const [products, setProducts] = useState(""); 
    const { categorie } = useParams();

    const getProductMarque = async()=>{
      const response = await axios.get(`http://localhost:5000/products/${categorie}`);
      setProducts(response.data.products);
   }

   getProductMarque();

	return(
          <div class="sidbare">
            <div class="categorie-name">Informatique</div>
            <div class="filter">
                <p class="filter-by">filtrer par <span>marque :</span></p>
                <ul class="filter-items">
                { products ?
                    Object.values(products).map((product, index)=>(
                       <FormControlLabel key={index}
                          control={<Checkbox required value="allowExtraEmails" color="default" />}
                          label={product.Marq_prod}
                       />
                    )) : "..."
                }
                   
                </ul>
                
                
            </div>
          </div>

		)
}

export default Sidbare;