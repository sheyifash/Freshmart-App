const Category = require("../models/Categorymodel")

const createCategory = async(req, res) => {
    try {
        const {categoryName, categoryCode} = req.body
        const newCategory = new Category({categoryName, categoryCode})
        await newCategory.save()
        res.status(200).json({message:"category table updated successfully!",
            newCategory
        })
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports = createCategory