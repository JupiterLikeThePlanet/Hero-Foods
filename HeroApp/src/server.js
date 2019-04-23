// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// const port = process.env.NODE_ENV === 'development' ? 3001 : 3010;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true })); // x-www-form-urlencoded

// require('./routes/health')(app);
// require('./routes/users')(app);

// app.listen(port, () => {
//   console.log(`listening on ${port}`);
// })

// module.exports = app;




const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// const health = require('/routes/health');
const users = require('/routes/users');


const port = process.env.NODE_ENV === 'development' ? 3001 : 3010;

// Body parser middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());


app.use('./routes/users', users);
// app.use('./routes/health', health);

app.get('/', (req, res) => {

  res.send('root route');
})

app.listen(port, () => {
  console.log(`listening on ${port}`);
})

module.exports = app;