import '../css/ProductPage.css'
import ProductMedia from './ProductMedia'
import ProductInfo from './ProductInfo'

const ProductPage = ({onAddToCartClicked}) => {
    return (
        <div className='product-page row my-md-5 py-md-5 px-0 px-md-5'>
            <ProductMedia />   
            <ProductInfo onAddToCartClicked={onAddToCartClicked} /> 
        </div>
    )
}

export default ProductPage