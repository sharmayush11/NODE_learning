const getProducts = async(req,res) => {
    try{
        const product = await Product.findById(req.params.id)

        if (!product) {
            return res.status(404).json({
                message : "Product not found"
            })
        }
        res.status(200).json({
            product
        })
    }
    catch(error){
        if (error.name === "CastError") {
            return res.status(400).json({
                message : "Invalid product ID"
            })
        }
        res.status(500).json({
            message : "Internal server error"
        })
    }
}