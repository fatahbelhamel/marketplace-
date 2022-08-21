import Category from "../models/categoryModel.js";


export const createCategory = async(req,res) =>{
    console.log(req.body);
    console.log(req.file);
    const { nom_categorie } = req.body;
    try{
        const categorie = await Category.findOne({
            where : {
                Nom_cat : req.body.nom_categorie
            }
        });
        if(categorie) return res.status(400).json({ message : "categorie exist deja"});
        const imageFile = req.file.filename;
        await Category.create({
            Nom_cat : nom_categorie,
            Img_cat : imageFile
        });
        res.status(200).json({
            message:"categorie est bien créer"
        });
    }catch(error){
        res.status(400).json({ message : error});
        console.log(error);
    }    
} 

export const getCategory = async(req,res) =>{
    try{
        const categories = await Category.findAll();
        if(categories) {
            res.status(200).json({
                categories
            });
        }else{
            res.status(400).json({
                message:"error"
            });
        }
    }catch(error){
        res.status(400).json({ message : error});
        console.log(error);
    }    
} 

export const getCategoryImage = async(req,res) =>{
    try{
        const categorie = await Category.findOne({
            where : {
                Nom_cat : req.params.categorie
            }
        });

        res.status(200).json({
                categorie
            });
        
    }catch(error){
        res.status(400).json({ message : error});
        console.log(error);
    }    
} 
