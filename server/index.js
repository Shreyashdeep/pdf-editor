const express = require('express');
const mergeRoute = require('./routes/merge');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', mergeRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});