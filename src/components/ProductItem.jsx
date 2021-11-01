import React,{useState} from 'react';
import '@styles/ProductItem.scss';
import AppContext from '../context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg'


const ProductItem = ({product}) => {
	const {addToCart} = React.useContext(AppContext)


	const handleAddToCart = (item) => {	
		addToCart(item);
		// setCart([]);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure	onClick={()=>handleAddToCart(product)}>
					<img src={addToCartImage} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
