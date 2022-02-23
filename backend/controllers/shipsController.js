const { ships} = require("../models/Ships")


const addShip = async (data) => {
    try {
        let ship = await ships.create(data)
        return ship
    } catch (error) {
        throw error
    }
}


const getShipById = async (id) => {
    try {
        let shipByID = await ships.findById(id)
        return shipByID
    } catch (error) {
        throw error
    }
}

const getAllShips = async () => {
    try {
        let ships = await ships.find()
        return ships
    } catch (error) {
        throw error
    }

}


const deleteShip = async (id) => {
    try {
        await ships.bulkWrite([
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

const updateShip = async (data) => {
    try {
        let { id } = data
        await shipModel.bulkWrite([
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
    addShip,
    getShipById,
    getAllShips,
    deleteShip,
    updateShip
}