const pdfParser = require('../utils/pdfParser')
const wordGenerator = require('../utils/wordGenerator')
const { deletePDFFile } = require('../utils/fileCleanup')

async function convertPdfToWord(pdfPath) {
    try {
        const text = await pdfParser(pdfPath)

        const wordFileName = await wordGenerator(text)

        await deletePDFFile(pdfPath)

        return wordFileName

    } catch (error) {
        console.error("Conversion Error:", error)
        throw new Error("Failed to convert file.")
    }
}

module.exports = { convertPdfToWord }