import { Router } from "express";
import {
  renderProducts,
  editProducts,
  updateProducts,
  createProducts,
  saveProducts,
  deleteProducts,
  filterProducts,
  resetProducts,
  xlsProducts,
  xmlProducts,
} from "../controllers/productController.js";
const router = Router();

// Do Something like this
import multer from 'multer';
import path from "path";

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
      // const uniqueName = Date.now() + path.extname(file.originalname);
      const uniqueName = file.originalname;
      cb(null, uniqueName); // Use a unique name for the file
    },
})
var upload = multer({
    storage: storage,
})


router.get("/", renderProducts);
router.get("/update/:id", editProducts);
router.post("/update/:id", upload.single('image'), updateProducts);
router.get("/add", createProducts);
router.post("/add",upload.single('image'), saveProducts);
router.get("/delete/:id", deleteProducts);

router.post("/filter", filterProducts);
router.post("/reset", resetProducts);
router.post("/export-xls", xlsProducts);
router.post("/export-xml", xmlProducts);


export default router;
