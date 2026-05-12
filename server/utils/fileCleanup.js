const fs = require('fs')
const path = require('path')

function deletePDFFile(filename) {
    const filePath = path.join('uploads/temp' , filename)

    if(fs.existsSync(filePath)) {
        fs.unlinkSync(filePath)
    }
}

function deleteWordFile(filename) {
    const filePath = path.join('uploads/converted' , filename)

    if(fs.existsSync(filePath)) {
        fs.unlinkSync(filePath)
    }
}