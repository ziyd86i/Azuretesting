const express = require('express');
const app = express();
const server = require('http').createServer(app);
const cors = require('cors');
const bodyParser = require('body-parser');
// const apiRoutes = express.Router();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('<h1> Hello Node.js</h1>');
});


app.get('/getcalculate/:kilo', (req,res) => {
  var kilo = req.params.kilo
  var sum = 0;
  console.log(kilo);

  if (kilo <= 1) {
    sum = kilo * 35
  }
  else if (kilo <= 10 && kilo > 1) {
    sum = Math.floor((kilo - 1) * 5.5 +35)

    if (sum % 2 == 0) {
      sum += 1
    }
    console.log(sum);
  }

  else if (kilo <= 20 && kilo > 10) {
    sum = Math.floor((kilo -10) * 6.5 + 84.5)

    if (sum % 2 == 0) {
      sum += 1
    }
    console.log(sum);
  }

  else if (kilo <= 40 && kilo > 20) {
    sum = Math.floor((kilo -20) * 7.5 + 150)

    if (sum % 2 == 0) {
      sum += 1
    }
    console.log(sum);
  }

  else if (kilo <= 60 && kilo > 40) {
    sum = Math.floor((kilo - 40) * 8 + 300)

    if (sum % 2 == 0) {
      sum += 1
    }
    console.log(sum);
  }

  else if (kilo <= 80 && kilo > 60) {
    sum = Math.floor((kilo - 60) * 9 + 460)

    if (sum % 2 == 0) {
      sum += 1
    }
    console.log(sum);
  }

  else if (kilo > 80) {
    sum = Math.floor((kilo - 80) * 10.5 + 640)

    if (sum % 2 == 0) {
      sum += 1
    }
    console.log(sum);
  }

  res.json({sum: sum})

})

server.listen(3000, () => {
  console.log('Express server is lisening on port 3000');
});
