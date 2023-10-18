const Product = require("../models/productModels")
const ErrorHandler = require("../utils/errorhandler")
const catchAsyncError = require("../middleware/catchAsyncError")

//createProduct
exports.createProduct = catchAsyncError(async(req, res, next) => {
    const product = await Product.create(req.body)
    res.status(201).json({
        success:true,
        product
    })
})

//getAllProduct
exports.getAllProduct = catchAsyncError(async(req, res, next) => {
    const product = await Product.find()
    res.status(201).json({
        success:true,
        product
    })
})

//defaultProduct
exports.defaultProduct = catchAsyncError(async(req, res, next) => {
    const product = await Product.findById(req.params.id)
    if(!product){
        return next(new ErrorHandler("Product Not Found", 404))
    }
    res.status(201).json({
        success:true,
        product
    })
})

//updateProduct
exports.updateProduct = catchAsyncError(async(req, res, next) => {
    let product = await Product.findById(req.params.id)
    if(!product){
        return next(new ErrorHandler("Product Not Found", 404))
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
        runValidators:true,
        useFindAndModify:false
    })
    res.status(201).json({
        success:true,
        product
    })
})

//deleteProduct
exports.deleteProduct = catchAsyncError(async(req, res, next) => {
    const product = await Product.findById(req.params.id)
    if(!product){
        return next(new ErrorHandler("Product Not Found", 404))
    }
    await product.deleteOne()
    res.status(201).json({
        success:true,
        message:"Product Delete Successfully"
    })
})