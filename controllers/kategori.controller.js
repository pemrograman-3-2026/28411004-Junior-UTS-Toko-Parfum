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

export const getAllKategori = async (req, res) => {
    const data = await prisma.genre.findMany ({})

    res.json(data)
}

// cari data by id
export const getKategoriById = async (req, res) => {
    const idKategori = req.params.id

    const data = await prisma.genre.findUnique({

        where : {
            id : Number (idKategori)
        }
    })

        res.json(data)

}

    // update data 
    export const updateKategori = async (req, res) => {
        const idKategori = Number(req.params.id)

        await prisma.genre.update({
            where : {
                id : idKategori
            },
            data : req.body
        })

        res.json({
            message : "Data Was Update Successfully"
        })
    }

    //delete data 1 aja
    export const deleteKategori = async (req, res) => {
        const idKategori = Number(req.params.id)

        await prisma.kategori.delete({
            where : {
            id : idKategori

            },
            data : req.body            
        })
        res.json({
            message : "Data Was Delete Successfully"
        })
    }