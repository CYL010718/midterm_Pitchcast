const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creating a schema, sort of like working with an ORM
const InfoSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Name field is required.']
	},
	number: {
		type: String,
		required: [true, 'Number field is required.']
	},
	img: {
		data:Buffer,
		contentType: String
	},
	Career:{
		
			W: {
				type: Number,
				default: 0
			},
			L: {
				type: Number,
				default: 0
			},
			G: {
				type: Number,
				default: 0
			},
			IP: {
				type: String,
				default: '0.0'
			},
			ERA: {
				type: Schema.Types.Mixed,
				default: '--'
			},
			SO: {
				type: Number,
				default: 0
			},
			BB: {
				type: Number,
				default: 0
			},
			WHIP: {
				type: Schema.Types.Mixed,
				default: '--'
			}
	},
	LastGame:{
		
			W: {
				type: Number,
				default: 0
			},
			L: {
				type: Number,
				default: 0
			},
			G: {
				type: Number,
				default: 0
			},
			IP: {
				type: String,
				default: '0.0'
			},
			ERA: {
				type: Schema.Types.Mixed,
				default: '--'
			},
			SO: {
				type: Number,
				default: 0
			},
			BB: {
				type: Number,
				default: 0
			},
			WHIP: {
				type: Schema.Types.Mixed,
				default: '--'
			},
		
		
	}
	
})

// Creating a table within database with the defined schema
const Info = mongoose.model('info', InfoSchema)

// Exporting table for querying and mutating
module.exports = Info
