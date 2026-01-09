import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

function ProductList() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .then(() => setLoading(false))
    }, [])

    if (loading) return <div>Loading...</div>

    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductList