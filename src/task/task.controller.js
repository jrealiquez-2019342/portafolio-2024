'use strict'

import Task from './task.model.js';

//Funcion para realizar test
export const test = (req, res) => {
    console.log('task test is running...');
    return res.send({ message: `Task test is running...` })
}

export const create = async (req, res) => {
    try {
        let data = req.body;

        if (!data || Object.entries(data).length == 0) return res.status(400).send({ message: `Empty data` });

        let task = new Task(data);
        await task.save()
        return res.send({ message: `Task created successfully` });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error creating task`, err });
    }
}

export const get = async (req, res) => {
    try {
        let tasks = await Task.find().sort({bimester: 1, week: 1});
        return res.send({ tasks });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error getting tasks`, err });
    }
}

export const modify = async (req, res) => {
    try {
        let data = req.body;
        let { id } = req.params;

        if (!data || Object.entries(data).length == 0) return res.status(400).send({ mesage: `Empty data` });

        if (
            !data.tile || !data.startDate || !data.course || !data.urlTask || !data.description ||
            data.title == '' ||
            data.startDate == '' ||
            data.course == '' ||
            data.urlTask == '' ||
            data.description == ''
        ) return res.status(422).send({ message: `Invalid data` })

        let task = await Task.findOneAndUpdate(
            { _id: id },
            data,
            { new: true }
        )

        if (!task) return res.status(404).send({ message: `Task not found` });

        return res.send({ messgae: `Modified task`, task });

    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error modifying task`, err });
    }
}

export const deleteTask = async (req, res) => {
    try {
        let { id } = req.params;
        let task = await Task.findOneAndDelete({ _id: id });
        if (!task) return res.status(404).send({ message: `Task not found` });
        return res.send({ message: `Task deleted successfully` });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error deleting task`, err });
    }
}

export const createTask = async () => {
    try {
        let pivot = await Task.findOne({ title: 'Laboratorio #1' });
        if (!pivot) {
            console.log('Creando tareas...');
            let tarea = new Task({
                course: 'TALLER',
                title: 'Laboratorio #1',
                habilities: 'Organización | HTML | CSS',
                description: 'Se crearon tres páginas para aprender HTML y css. La primera trata de las cosas que me gustan; la segunda muestra mi biografía; la tercera muestra una mejora en la página de kinal.academy',
                bimester: 1,
                week: 2,
                urlTask: 'https://cetkinal-my.sharepoint.com/:u:/g/personal/jrealiquez-2019342_kinal_edu_gt/EdJZvd7pHT5ItKymYtQ3t3kBOkFE1glpdmcNw5XJI5hqMg?e=nhBjp5',
                urlImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMb-wN8vWbzOGK0k3ptZZi3WE8Qek7xi7quO-3VqCAMQ&s'
            });
            await tarea.save();
            return console.log('Tarea creada correctamente');
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error al crear tareas`, err })
    }
}