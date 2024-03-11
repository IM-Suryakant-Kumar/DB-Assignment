const { Schema } = require("mongoose");

const productsSchema = new Schema(
	{
		name: { type: String, required: [true, "Please provide name"] },
		desc: { type: String, required: [true, "Please provide desc"] },
		category_id: {
			type: String,
			required: [true, "Please provide category_id"],
		},
		inventory_id: {
			type: String,
			required: [true, "Please provide inventory_id"],
		},
		price: { type: Number, required: [true, "Please provide price"] },
		discount_id: {
			type: Number,
			required: [true, "Please provide discount_id"],
		},
		price: { type: Number, required: [true, "Please provide price"] },
	},
	{ timestamps: true }
);
