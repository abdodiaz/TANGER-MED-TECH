const { Schema, model } = require("mongoose")


const shipSchema = new Schema(
    {
        name: { type: String },
        capacity: { type: String },
        nationality: { type: String },
        type: { type: String },
        idShipOwner: {
            type: Schema.Types.ObjectId,
            ref: "ShipOwner",
        }
    },
    { timestamps: true }
)

const ships = model("Ship", shipSchema);

module.exports = {
    ships
}