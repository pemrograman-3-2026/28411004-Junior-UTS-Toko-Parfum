import { Router } from "express"
import {create,getAllProduk,updateProduk} from "../controllers/produk.controller.js"

const router = Router()

router.post('/create',create )
router.get('/get-all', getAllProduk)
router.put('/update/:id', updateProduk)

export default router