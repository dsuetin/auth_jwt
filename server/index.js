require('dotenv').config({ path: require('find-config')('.env') })
const express = require( 'express' );
const cors = require( 'cors' );
const cookieParser = require( 'cookie-parser' );

const mongoose = require( 'mongoose' );
const router = require( './router/index' );
// mongodb+srv://suetindaniil:Proton938uud@dsuetin.a6o8kqc.mongodb.net/?retryWrites=true&w=majority


const PORT = process.env.PORT || 6000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', router);

console.log(process.env.PORT);
console.log(process.env.MONGODB_URI);
const start = async () => {
    try {
      await mongoose.connect( process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } );
      app.listen( PORT, () => {console.log( `Server running on port ${PORT}` )});
    } catch ( err ) {
        console.error( 'Error', err );
    };
}

start();