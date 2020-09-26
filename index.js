const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();

app.use(cors());
app.use(bodyParser.json());

const user = ['asad', 'moin', 'susmita', 'sohana']

// const rootCall = (req, res) => res.send('Thank you very much')

app.get('/', (req, res) => {
    const fruit = {
        product: 'ada',
        price: '220'
    }
    res.send(fruit);
})

// app.get('/fruits/banana', (req, res) => {
//     res.send({
//         fruit: 'banana',
//         quantity: 1000,
//         price: 10000
//     })
// })


// get
app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const name = user[id];
    res.send({ id, name });
})

// Post
app.post('/addUser', (req, res) => {
    // save to database
    const user = req.body;
    user.id = 55;
    res.send(user)
})


app.listen(4000, () => console.log('listening to port 4000'))
