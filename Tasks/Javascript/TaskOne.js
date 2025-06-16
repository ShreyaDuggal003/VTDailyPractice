const data = require('../test.json');

//UsingMap
function CategoryUsingMap(data)
{
    const map = new Map();

    for(let i=0; i<data.length; i++)
    {
        let products = data[i].products;
            
        for(let j=0; j<products.length; j++)
        {
            let product = products[j];
            let category = product.Category;
        
            let itemData= {
                    ProductID:product.ProductID,
                    Proudct:product.Product,
                    Category:product.Category,
                    Quantity:product.Quantity
                };

            if(!map.has(category))
            {
                map.set(category,[itemData]);
}
                map.get(category).push(itemData);
    

        }
    }
        
    return map;

}

//Using Reduce
function CategoryUsingReduce(data)
{
    
    const details = data.reduce((productsItem, item) => {
        let allProduct = item.products;
            
        for(let i=0; i<allProduct.length; i++)
        {
            let product= allProduct[i];
            const category = product.Category;
                
            if(category in productsItem)
            {
                let temp = productsItem[category];
                temp.push(product);
            }
            else
            {
                productsItem[`${category}`]=[product];
            }
            
        }
            
        return productsItem;
        
    },{})

    return details;
    
}

//UsingObjects
function CategoryUsingObjects(data)
{
    const list={};
    data.forEach((allProducts) => {
        allProducts.products.forEach((oneProduct) => {

            if(oneProduct.Category in list) 
            { 
                list[`${oneProduct.Category}`].push(oneProduct);
            }
            else
            {
                list[`${oneProduct.Category}`] = [oneProduct];
            }  
        })
    });
    
    return list;

}
console.log("USING MAP: ");
console.log(CategoryUsingMap(data));
console.log("USING REDUCE: ");
console.log(CategoryUsingReduce(data));
console.log("USING OBJECT: ");
console.log(CategoryUsingObjects(data));





