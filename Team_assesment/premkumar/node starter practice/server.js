const app = require('./app')
const dotenv = require('dotenv')
// console.log(app.get('env'));

dotenv.config({path : './config.env'});

//console.log(process.env);  //shows all environment variables

app.listen(process.env.PORT, () => {
    console.log('App running on 3000');
  });