import { getStoredCart } from "../utilities/fakedb";

export const productAndcart= async()=>{
    const productsdata=await fetch('products.json');
    
    const products=await productsdata.json();
    
    const seveCart=getStoredCart()
    const initial=[]
    for (const id in seveCart){
        const addedProduct=products.find(product=>product.id===id);
        if(addedProduct){
            const quantity=seveCart[id]
            addedProduct.quantity=quantity
            initial.push(addedProduct)
            
            console.log(id,quantity)


        }

    }
    //console.log('save', seveCart)
    
    return {products,initial};


}