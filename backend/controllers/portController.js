const { port } = require("../models/Port")


const addport = async (data) => {
    try {
        let port = await portModel.create(data)
        return port
    } catch (error) {
        throw error
    }
}


const getportById = async (id) => {
    try {
        let portByID = await portModel.findById(id)
        return portByID
    } catch (error) {
        throw error
    }
}

const getAllports = async () => {
    try {
        let ports = await portModel.find()
        return ports
    } catch (error) {
        throw error
    }

}


const deleteport = async (id) => {
    try {
        await portModel.bulkWrite([
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

const updateport = async (data) => {
    try {
        let { id } = data
        await portModel.bulkWrite([
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
    addport,
    getportById,
    getAllports,
    deleteport,
    updateport
}