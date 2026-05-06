import express from 'express'
import UserRoute from './routes/user.route.js'
import ProdukRoute from './routes/produk.route.js'
import KategoriRoute from './routes/kategori.route.js'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('HelloWorld!')
})

app.use('/user', UserRoute)
app.use('/produk', ProdukRoute)
app.use('/kategori', KategoriRoute)

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})