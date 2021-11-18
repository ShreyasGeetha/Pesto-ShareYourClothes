/*const express = require('express');
const next = require('next');

const products = require('./data/product')

require('dotenv').config();
const PORT = process.env.PORT || 5000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev})

const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    const showRoutes = require("./routes/index.js");

    server.use("/api", showRoutes);

     server.all('*', (req, res) => {
    return handle(req, res)
     })
        

    //server.get('/api/products', showRoutes)

    
    server.get('/api/products/:id', (req, res) => {
      const product = products.find(p => p.id == req.params.id)
      
      return handle(res.json(product))
    })

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`> Ready on ${PORT}`)
    })
  })
  .catch(ex => {
    console.error("Is this the error:",ex.stack);
    process.exit(1);
  })
*/

import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

dotenv.config();
connectDB()

const app = express();
app.use(cors())
//this will allow to accept json data in the body - for instance accepting username and password from form login
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products/',productRoutes)
app.use('/api/users/',userRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

