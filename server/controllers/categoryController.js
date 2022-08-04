import Category from "../models/categoryModel.js";


export const createCategory = async(req,res) =>{
    console.log(req.body);
    console.log(req.file);
    const { nom_categorie } = req.body;
    try{
        const categorie = await Category.findOne({
            where : {
                nom_categorie : req.body.nom_categorie
            }
        });
        if(categorie) return res.status(400).json({ message : "categorie exist deja"});
        const imageFile = req.file.filename;
        await Category.create({
            nom_categorie : nom_categorie,
            image : imageFile
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