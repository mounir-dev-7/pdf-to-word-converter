const multer = require('multer')
const path = require('path')

function PDFupload() {
    const storage = multer.diskStorage({
        destination : (req , file , cb) => cb(null , 'uploads/temp'),
        filename : (req , file , cb) => cb(null , Date.now() + path.extname(file.originalname)),
    })

    const PDFfilter = (req , file , cb) => {
        if (file.mimetype === 'application/pdf') {
            cb(null , true)
        } else {
            cb(new Error('Only PDF files are allowed!'), false); 
        }
    }

    const upload = multer({
        storage : storage,
        fileFilter : PDFfilter,
        limits : { fileSize : 10 * 1024 * 1024 }
    })

    return upload
}

module.exports = PDFupload