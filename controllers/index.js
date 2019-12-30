const items = [

    {id: 1, name: 'product1'},
    {id: 1, name: 'product1'},
    {id: 1, name: 'product1'}

]

const index = (req, res) =>{
    res.render('index.ejs',{
        title: 'My store'
    })
}

const getProducts = (req,res, next) =>{
    res.render('products.ejs',{
        title: 'List of Products',
        items: items
    })
}

const addNewItem = (req,res,next) =>{
    const { newItem } = req.body;
    items.push({
        id: items.length + 1,
        name: newItem
    })
    res.redirect('/products')
}


module.exports = {
    index,
    getProducts,
    addNewItem
}