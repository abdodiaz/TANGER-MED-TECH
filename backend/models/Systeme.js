const { Schema, model } = require("mongoose")


const systemSchema = new Schema(
    {
        name: { type: String },
        description: { type: Boolean },
        storageDeadline: { type: String },
        lateShippingFee: { type: String },
        capacityPerQuais: { type: String },
        quaisFeePerDay: { type: String },
    },
    { timestamps: true }
)

const system = model("System", systemSchema);

module.exports = {
    system
}