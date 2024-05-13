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
        required: [true, 'Title is required.']
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
        typeof: Number
    },
    week:{
        typeof: Number
    },
    urlTask:{
        type: String,
        required: [true, 'URL is required']
    }
},{
    versionKey: false
});

export default model('Task', taskSchema);