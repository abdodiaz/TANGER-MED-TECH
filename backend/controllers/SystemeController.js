const {system} = require("../models/Systeme")


const addsysteme = async (data) => {
    try {
        let systeme = await system.create(data)
        return systeme
    } catch (error) {
        throw error
    }
}


const getsystemeById = async (id) => {
    try {
        let systemeByID = await system.findById(id)
        return systemeByID
    } catch (error) {
        throw error
    }
}

const getAllsystem = async () => {
    try {
        let system = await system.find()
        return system
    } catch (error) {
        throw error
    }

}


const deletesysteme = async (id) => {
    try {
        await system.bulkWrite([
            {
                deleteOne: {
                    filter: { _id: id }
                }
            }
        ])
    } catch (error) {
        throw error
    }

}

const updatesysteme = async (data) => {
    try {
        let { id } = data
        await systemeModel.bulkWrite([
            {
                updateOne: {
                    filter: { _id: id },
                    update: data
                }
            }
        ])
    } catch (error) {
        throw error
    }
}



module.exports = {
    addsysteme,
    getsystemeById,
    getAllsystem,
    deletesysteme,
    updatesysteme
}