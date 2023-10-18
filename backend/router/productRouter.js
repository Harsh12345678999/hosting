const express = require("express")
const {
    getAllProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    defaultProduct
} = require("../controllers/productController")
const router = express.Router()

router.route("/products").get(getAllProduct)
router.route("/products/new").post(createProduct)
router.route("/products/:id").put(updateProduct).delete(deleteProduct).get(defaultProduct)

module.exports = router