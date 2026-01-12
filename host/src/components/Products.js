import React from 'react'

const ProductList = React.lazy(() => import('products/ProductList'))

function Products() {
    return (
        <React.Suspense fallback={<div>Loading products...</div>}>
            <ProductList />
        </React.Suspense>
    )
}

export default Products