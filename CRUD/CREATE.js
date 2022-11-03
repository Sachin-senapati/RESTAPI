const router=require("express").Router();
const {Product}=require("../model/product")

router.post("/",async(req,res)=>{
    try{
        const product=new Product({...req.body});
        await product.save()
        res.json(product)
    }catch(error){
        console.log(error);
    }
})

module.exports=router