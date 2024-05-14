'use strict'

import { Schema, model } from 'mongoose'

const taskSchema = Schema({
    user:{
        type: String,
        default: 'Joshua Realiquez',
        required: [true, 'User is required']
    },
    course:{
        type: String,
        enum: ['TECNOLOGIA', 'TALLER', 'PRACTICA SUPERVISADA'],
        required: [true, 'Course is required']
    },
    title: {
        type: String,
        required: [true, 'Title is required.'],
        unique: [true, 'Title must be unique']
    },
    habilities: {
        type: String,
        required: [true, 'Habilities is required.']
    },
    description:{
        type: String,
        required: [true, 'Description is required']
    },
    bimester:{
        type: Number
    },
    week:{
        type: Number
    },
    urlTask:{
        type: String,
        required: [true, 'URL is required']
    },
    urlImage: {
        type: String
    }
},{
    versionKey: false
});

export default model('Task', taskSchema);