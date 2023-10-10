const express = require('express');
const bodyParser=require('body-parser')
const userRoutes=require('./joi_routes/userRoutes')
const path=require('path')
const app = express();
const port = 3000;

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/joi_views', express.static(path.join(__dirname, 'joi_views')))
; // Serve static files from the 'views' folder
app.use('/user',userRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})