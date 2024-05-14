'use strict'
import mongoose from 'mongoose';

//exportar la conexion
export const connect = async () => {
    try {
        mongoose.connection.on('error', () => {
            console.log('MongoDB | could not be connect to mongodb');
            mongoose.disconnect();
        })

        mongoose.connection.on('connecting', () => {
            console.log('MongoDB | try connecting');
        })

        mongoose.connection.on('connected', () => {
            console.log('MongoDB | connected to mongodb')
        })

        mongoose.connection.on('open', () => {
            console.log('MongoDB | connected to database')
        })

        mongoose.connection.on('reconnected', () => {
            console.log('MongoDB | reconected to mongodb')
        })

        mongoose.connection.on('disconnected', () => {
            console.log('MongoDB | disconnected')
        })

        await mongoose.connect(process.env.URI_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
            maxPoolSize: 50
        })
        console.log('MongoDB | connected to database Atlas');
    } catch (err) {
        console.error('Database connection failed. ', err);
    }
}
