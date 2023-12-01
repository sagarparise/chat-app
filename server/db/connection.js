const mongoose = require('mongoose');
const password = encodeURIComponent('Aaradhya18');

const url = `mongodb+srv://chat_app_admin:${password}@cluster0.viurgbu.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(url, 
    { useNewUrlParser: true,
     useUnifiedTopology: true })
     .then(()=>{
    console.log("Connected to DB")
}).catch(()=> console.log('Error', e))