const mongoose = require('mongoose');

const PlaceSchema =new mongoose.Schema({
    owner:{type:mongoose.Schema.Types.Objectid,ref:'User'},
    titel :String,
    address:String,
    photo:[String],
    description:String,
    perks:[String],
    extraInfo:String,
    checkIn:Number,
    chechOut:Number,
    maxGuests:Number,
});

const PlaceModel =mongoose.model('place',PlaceSchema)

module.exports =PlaceModel;
