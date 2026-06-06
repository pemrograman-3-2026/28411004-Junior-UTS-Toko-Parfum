import { Router } from "express"
import {create,getAllKategori,getKategoriById,updateKategori,deleteKategori} from "../controllers/kategori.controller.js"

const router = Router()

router.post('/create', create)
router.get('/get-all', getAllKategori)
router.get('/get/:id', getKategoriById)
router.put('/update/:id', updateKategori)
router.delete('/delete/:id', deleteKategori)

export default router