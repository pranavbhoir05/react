import express from 'express';

const app = express();

app.get('/api/products', (req,res) => {
    const products = [
        {
         id:1,
         name: 'red shirt',
         price: 10,
         description: 'A red shirt - it is pretty red!'   
        },
        {
         id:2,
         name: 'blue shirt',
         price: 20,
         description: 'A blue shirt - it is pretty blue!'   
        },
        {
         id:3,
         name: 'green shirt',
         price: 5,
         description: 'A green shirt - it is pretty green!'   
        },
        {
         id:4,
         name: 'yellow shirt',
         price: 15,
         description: 'A yellow shirt - it is pretty yellow!'   
        },
        {
         id:5,
         name: 'purple shirt',
         price: 25,
         description: 'A purple shirt - it is pretty purple!'   
        }
    ]

  //http://localhost:3000/api/products?search=red 
  
  if(req.query.search){
    const filterProducts = products.filter(product =>
         product.name.includes(req.query.search))
    res.send(filterProducts)
    return;
  }

    setTimeout(() =>{
        res.send(products)
    },3000)
 
})
  
const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
})

















