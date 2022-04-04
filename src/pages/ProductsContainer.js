import React, {useState, useEffect} from 'react';
import Products from './Products';

const ProductsContainer = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filters, setFilters] = useState ( {
        s: '',
        sort: ''
    });
    useEffect ( () => {
        return(
            async () => {

                
                const response = await fetch(`us-cdbr-east-05.cleardb.net/api/products`);
                const content =  await response.json();
                setAllProducts(content);
                setFilteredProducts(content);
            }
        )()
    },[]);

    useEffect(()=>{
        let products = allProducts.filter(p => p.Title.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0 || p.Description.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0)


        if(filters.sort === 'asc' || filters.sort === 'desc'){
            products.sort((a,b)=>{
                const difference = a.Price - b.Price;
                
                if(difference===0) return 0;

                const sign = Math.abs(difference)/difference

                return filters.sort === 'asc' ? sign : -sign;
            })
        }

        

        setFilteredProducts(products)
    },[filters])

    return (
        <Products products={filteredProducts} filters={filters} setFilters={setFilters} />
    )
}

export default ProductsContainer;