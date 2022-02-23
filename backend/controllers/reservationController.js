const { reservation} = require("../models/Reservation")


const addReservation = async (data) => {
    try {
        let Reservation = await reservation.create(data)
        return Reservation
    } catch (error) {
        throw error
    }
}


const getReservationById = async (id) => {
    try {
        let ReservationByID = await reservation.findById(id)
        return ReservationByID
    } catch (error) {
        throw error
    }
}

const getAllReservations = async () => {
    try {
        let Reservations = await reservation.find()
        return Reservations
    } catch (error) {
        throw error
    }

}


const deleteReservation = async (id) => {
    try {
        await reservation.bulkWrite([
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

const updateReservation = async (data) => {
    try {
        let { id } = data
        await reservation.bulkWrite([
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
    addReservation,
    getReservationById,
    getAllReservations,
    deleteReservation,
    updateReservation
}