import { prisma } from "../lib/prisma.js"

export const create = async (req, res) => {
    const body = req.body

    await prisma.kategori.create({
        data:{
            name: body.name
        }
    })
    res.json({
        messege: 'kategori created successfulyy'
    })
}