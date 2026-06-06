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
        message: 'Produk Created Successfully'
    })
}

export const updateProduk = async (req, res) => {
    const body = req.body

    let data = {
        name : body.name,
        harga : body.harga,
        description : body.description
    }

    await prisma.produk.update({
        where : {
            id : Number(req.params.id)
        },
        data
    })

    res.json({
        message : "Product Was Update Complete"
    })
}

export const getAllProduk = async (req, res) => {
    const data = await prisma.produk.findMany()

    res.json(data)
}