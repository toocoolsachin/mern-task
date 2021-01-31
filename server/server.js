const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const routes = require('./routes/routes');

app.use(cors());
app.use(express.json());

mongoose.connect(
  `mongodb://localhost:27017/mern-project`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.log(`error in connecting database ${err}`);

    console.log(`Database Connected...`);
  }
);

const PORT = process.env.PORT || 5000;

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
