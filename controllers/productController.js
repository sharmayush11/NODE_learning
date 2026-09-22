const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        // Product nahi mila
        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        // Product mil gaya
        res.status(200).json({
            product: product
        });

    } catch (error) {

        // Invalid MongoDB ObjectId
        if (error.name === "CastError") {
            return res.status(400).json({
                message: "Invalid product ID"
            });
        }

        // Other unexpected errors
        res.status(500).json({
            message: "Internal server error"
        });
    }
};