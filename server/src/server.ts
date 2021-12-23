import express from 'express';

const app = express ();

app.post('/users', (request, response) => {
    const users = [
        {name: 'Marco', age: 22},
        {name: 'Juca', age: 34},
    ]

    return response.json(users);
   
});

app.listen(3333);