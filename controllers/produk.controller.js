import { prisma } from "../lib/prisma.js"

export const create = async (req, res) => {
    const body = req.body

    await prisma.produk.create({
        data:{
            name: body.name,
            harga: body.harga,
            description: body.description
        }
    })
    res.json({
        messege: 'produk created successfulyy'
    })
}