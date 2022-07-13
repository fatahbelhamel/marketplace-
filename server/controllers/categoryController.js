import Category from "../models/categoryModel.js";


export const createCategory = async(req,res) =>{
    const { category_name } = req.body;
    try{
        const category = await Category.findOne({
            where : {
                category_name : req.body.category_name
            }
        });
        if(category) return res.status(400).json({ message : "categorie exist deja"});
        await Category.create({
            category_name : category_name
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
                message: categories
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