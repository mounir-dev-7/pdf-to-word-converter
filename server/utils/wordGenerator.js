const { Document , Packer , Paragraph } = require('docx')
const fs = require('fs') 
const path = require('path')

async function generateWord(text) {
    const doc = new Document({
        children : [new Paragraph(text)]
    })

    const buffer = await Packer.toBuffer(doc)
    const fileName = Date.now() + '.docx'
    const filePath = path.join('uploads/converted' , fileName)

    fs.writeFileSync(filePath , buffer)

    return fileName
}

module.exports = generateWord