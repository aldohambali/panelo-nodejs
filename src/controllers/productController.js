import { pool } from "../db.js";

import axios from 'axios';
import * as xlsx from 'xlsx';
import xmlbuilder from 'xmlbuilder';

export const renderProducts = async (req, res) => {

  // var parsedURL = url.parse(req.url, true);
  console.log('limit : ',req.query.limit)
  console.log('category : ',req.query.category)

  var limit = 12
  var category = ''
  var whereCategory = ""
  var offset = 0 
  if(req.query.limit){
    limit = parseInt(req.query.limit)
    console.log('limit jadi : ',limit)
  }
  if(req.query.category){
    category = req.query.category
    whereCategory = "where category_id = "+category+"";
  }
  if(req.query.offset){
    offset = parseInt(req.query.offset)
  }

  const [rows] = await pool.query("select products.id, title, price, content, stock, category_id from products left join price on products.id = price.term_id left join preview on products.id = preview.term_id left join stock on products.id = stock.term_id "+whereCategory+" limit ? offset ?",[ limit, offset]);
  // console.log('rows : ',rows)
  const [list] = await pool.query("select id, name from categories");
  //console.log('list : ',list)
  res.render("products", { products: rows, category: list });
};

export const editProducts = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query("select products.id, title, price, content, stock, category_id from products left join price on products.id = price.term_id left join preview on products.id = preview.term_id left join stock on products.id = stock.term_id WHERE products.id = ?", [
    id,
  ]);
  const [list] = await pool.query("select id, name from categories");
  console.log('list : ',list)
  res.render("products_edit", { products: result[0], category: list });
};

export const updateProducts = async (req, res) => {
  const { id } = req.params;
  const products = req.body;
  console.log('updateProducts : ',products)
  
  await pool.query("UPDATE price set ? WHERE term_id = ?", [ { price: products['price'] }, id]);
  await pool.query("UPDATE stock set ? WHERE term_id = ?", [ { stock: products['stock'] }, id]);
  await pool.query("UPDATE products set ? WHERE id = ?", [ { category_id: products['category'], title: products['name'] }, id]);

  const imageName = (req.file) ? req.file.filename : null;
  console.log('imageName : ',imageName)
  if(imageName){
      console.log('update image')
      const checkId = await pool.query("SELECT content from preview where term_id = ?", [id]);
      console.log('checkId',checkId)
      if(checkId){
        await pool.query("UPDATE preview set ? WHERE term_id = ?", [ { content: "/uploads/"+imageName }, id]);
      } else {
        await pool.query("INSERT into preview set ?", [ { term_id: id, type:"preview", content: "/uploads/"+imageName } ]);
      }
  }


  res.redirect('/');
};


export const createProducts = async (req, res) => {
  const [list] = await pool.query("select id, name from categories");
  res.render("products_create", {category: list });
};

export const saveProducts = async (req, res) => {

  const products = req.body;
  console.log('saveProducts products = ',products)

  const [results] = await pool.query("INSERT INTO products set ?", [ { title: products['name'], category_id: products['category'] }]);

  const lastInsertId = results.insertId;

  console.log('Last Inserted ID:', lastInsertId);

  if(lastInsertId){
    console.log('add stok n price');
    await pool.query( "INSERT INTO price set ?",[ { price: products['price'], term_id: lastInsertId }])
    await pool.query( "INSERT INTO stock set ?",[ { stock: products['stock'], term_id: lastInsertId }])

    const imageName = (req.file) ? req.file.filename : null;
    console.log('imageName : ',imageName)
    if(imageName){
      await pool.query("INSERT into preview set ?", [ { term_id: lastInsertId, type:"preview", content: "/uploads/"+imageName } ]);
    }
  
  }

  res.redirect('/');
};


export const deleteProducts = async (req, res) => {
  const { id } = req.params;
  console.log('delete id : ',req.params)
  const result = await pool.query("DELETE FROM products WHERE id = ?", [id]);

  await pool.query("DELETE FROM price WHERE term_id = ?", [id]);
  await pool.query("DELETE FROM stock WHERE term_id = ?", [id]);


  if (result.affectedRows === 1) {
    res.json({ message: "Product deleted" });
  }
  res.redirect("/");
};


export const filterProducts = async (req, res) => {

  const filter = req.body;
  console.log('filter : ',filter)


  var arrParam = []
  if(filter.category){
    arrParam.push('category='+filter.category)
  }
  if(filter.limit){
    arrParam.push('limit='+filter.limit)
  }

  if(arrParam.length>0){
    console.log('myArray ', arrParam.join('&'))
    res.redirect("/?"+ arrParam.join('&'));
  } else {
    res.redirect("/");
  }

};

export const resetProducts = async (req, res) => {
  console.log('-- reset --')


  const response = await axios.get(`https://portal.panelo.co/paneloresto/api/productlist/18`, {});
  //console.log('get from API = ',response.data);


  const dataArray = Array.isArray(response.data.products) ? response.data.products : [];   

  var category = []
  var stock = []
  var preview = []
  var price = []
  var products = []

  // Example of accessing elements in the array
  dataArray.forEach((item,index) => {        
    // console.log('index:', index);
    // console.log('Item:', item);
    var setCategory ={
      id:item.id,
      name:item.name,
      user_id:item.user_id
    }
    category.push(setCategory)

    item.products.forEach(product => {  
      var setProduct ={
        id:product.id,
        title:product.title,
        slug:product.slug,
        lang:product.lang,
        auth_id:product.auth_id,
        status:product.status,
        type:product.type,
        count:product.count,
        category_id:item.id,
        created_at:product.created_at,
        updated_at:product.updated_at
      }
      products.push(setProduct)

      var setPrice = {
        id:product.price.id,
        term_id:product.price.term_id,
        price:product.price.price
      }
      price.push(setPrice)

      var setStock = {
        id:product.stock.id,
        term_id:product.stock.term_id,
        stock:product.stock.stock
      }
      stock.push(setStock)

      var setPreview = {
        id:product.preview.id,
        term_id:product.preview.term_id,
        type:product.preview.type,
        content:product.preview.content
      }
      preview.push(setPreview)

    })


  });
  



  // console.log('get from API data category = ',category);
  // console.log('get from API data products = ',products);

  console.log('get from API data stock = ',stock);
  console.log('get from API data price = ',price);
  console.log('get from API data preview = ',preview);

  //remove / backup table

  //insert all

  //remove stock
  await pool.query("TRUNCATE TABLE stock");
  //insert stock
  stock.forEach(element => {
    console.log('insert stock : ',element)
    pool.query("INSERT INTO stock set ?", element);
  });

  //remove preview
  await pool.query("TRUNCATE TABLE preview");
  //insert preview
  preview.forEach(element => {
    console.log('insert preview : ',element)
    pool.query("INSERT INTO preview set ?", element);
  });

  //remove stock
  await pool.query("TRUNCATE TABLE stock");
  //insert stock
  stock.forEach(element => {
    console.log('insert stock : ',element)
    pool.query("INSERT INTO stock set ?", element);
  });
  
  //remove price
  await pool.query("TRUNCATE TABLE price");
  //insert price
  price.forEach(element => {
    console.log('insert price : ',element)
    pool.query("INSERT INTO price set ?", element);
  });
  


  //remove products
  await pool.query("TRUNCATE TABLE products");
  //insert price
  products.forEach(element => {
    console.log('insert products : ',element)
    pool.query("INSERT INTO products set ?", element);
  });

  //remove categories
  await pool.query("TRUNCATE TABLE categories");
  //insert categories
  category.forEach(element => {
    console.log('insert categories : ',element)
    pool.query("INSERT INTO categories set ?", element);
  });



  res.redirect("/");
};


export const xlsProducts = async (req, res) => {
  const [results] = await pool.query("select products.id, title, price, content, stock, category_id from products left join price on products.id = price.term_id left join preview on products.id = preview.term_id left join stock on products.id = stock.term_id");

  const worksheet = xlsx.utils.json_to_sheet(results);
  const workbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(workbook, worksheet, 'Data');

  const buffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'buffer' });

  res.setHeader('Content-Disposition', 'attachment; filename=output.xlsx');
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

  res.send(buffer);

  console.log(`Data exported successfully to ${filePath}`);

  //res.redirect("/");
};

export const xmlProducts = async (req, res) => {
  const [results] = await pool.query("select products.id, title, price, content, stock, category_id from products left join price on products.id = price.term_id left join preview on products.id = preview.term_id left join stock on products.id = stock.term_id");

    // Create XML from the results
    const xml = xmlbuilder.create('products');

    results.forEach(row => {
      const item = xml.ele('product')
        .ele('id', row.id).up()
        .ele('title', row.title).up()
        .ele('price', row.price).up()
        .ele('content', row.content).up()
        .ele('stock', row.stock).up()
        .ele('category_id', row.category_id).up();
    });

    const xmlString = xml.end({ pretty: true });

    // Set response headers for XML file download
    res.setHeader('Content-Disposition', 'attachment; filename=products.xml');
    res.setHeader('Content-Type', 'application/xml');

    // Send the XML to the client
    res.send(xmlString);
};