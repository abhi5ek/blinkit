// import express
const express = require('express');

// importing routers
const userRouter = require('./routers/userRouter');
const imageRouter = require('./routers/imageRouter');
// const productRouter = require('./routers/productRouter');
// const projectRouter = require('./routers/projectRouter');
// const utilRouter = require('./routers/util');

const cors = require('cors');


//intialize express app
const app = express();
const port = 5000;

//middleware

app.use(express.json());
app.use(express.static('./uploads'))

app.use(cors({
    origin: [ 'http://localhost:3000']
}));

app.use('/user',userRouter);
app.use('/image',imageRouter);
// app.use('/product',productRouter);
// app.use('/project',projectRouter);
// app.use('/util',utilRouter);

app.use(express.static('./uploads'))

// routes
app.get('/',(req, res) => {
    res.send('Response from express');
} );

// add

app.get('/add',(req,res) => {
    res.send('Response from add')
});

// getall

app.get('/getall',(req,res) => {
    res.send('Response from getall')
});

// delete

app.get('/delete',(req,res) => {
    res.send('Response from delete')
});


app.listen( port, () => {console.log('express server started at 5000') } );
