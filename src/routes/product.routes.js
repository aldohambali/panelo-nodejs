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

router.get("/", renderProducts);
router.get("/update/:id", editProducts);
router.post("/update/:id", updateProducts);
router.get("/add", createProducts);
router.post("/add", saveProducts);
router.get("/delete/:id", deleteProducts);

router.post("/filter", filterProducts);
router.post("/reset", resetProducts);
router.post("/export-xls", xlsProducts);
router.post("/export-xml", xmlProducts);


export default router;
