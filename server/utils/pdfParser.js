const pdfParse = require('pdf-parse')
const fs = require('fs')

async function parsePDF(path) {
    const data =  fs.readFileSync(path)
    const pdf = await pdfParse(data)
    const text = pdf.text
    return text 

}

module.exports = parsePDF