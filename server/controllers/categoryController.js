import Category from "../models/categoryModel.js";


export const createCategory = async(req,res) =>{
    const { name, image } = req.body;
    try{
        const categorie = await Category.findOne({
            where : {
                name : req.body.name
            }
        });
        if(categorie) return res.status(400).json({ message : "categorie exist deja"});
        await Category.create({
            name : name,
            image : image
        });
        res.status(200).json({
            message:"categorie est bien créer"
        });
    }catch(error){
        res.status(400).json({ message : error});
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
    }    
} 