const mongoose =require('mongoose');

const url ="mongodb+srv://Abhi5ek:Abhishek123@abhi5ek.g1jiidh.mongodb.net/myDB?retryWrites=true&w=majority";

// asynchrounous function
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;