const app = require('./app');
const port = 8000;

app.listen(port, (res) => {
  console.log(`Server is running on port ${port}`);
});
