import Product from "../models/product";
import Joi from "joi";
export const create = async (req,res)=>{
    try {
        const product = await Product.create(req.body);
        return res.status(200).json({
            message: "them San Pham thanh cong",
            product
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
        })
    }
}
export const getAll = async (req,res)=>{
    try {
        const product = await Product.find();
        return res.status(200).json(product)
    } catch (error) {
        return res.status(400).json({
            message: error,
        })
    }
}
export const get = async (req,res)=>{
    try {
        const product = await Product.findById(req.params.id);
        return res.status(200).json(product)
    } catch (error) {
        return res.status(400).json({
            message: error,
        })
    }
}
export const update = async (req,res)=>{
    try {
        const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.status(200).json({
            message: "sua San Pham thanh cong",
            product
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
        })
    }
}
export const remove = async (req,res)=>{
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message: "Xoa San Pham thanh cong",
            product
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
        })
    }
}