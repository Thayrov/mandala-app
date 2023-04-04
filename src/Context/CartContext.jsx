import {createContext, useState} from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
	const [cart, setCart] = useState([]);

	const addToCart = mandala => {
		let alreadyInCart = isInCart(mandala.id);

		if (alreadyInCart) {
			let newCart = cart.map(item => {
				if (item.id === mandala.id) {
					return {
						...item,
						quantity: mandala.quantity,
					};
				} else {
					return item;
				}
			});

			setCart(newCart);
		} else {
			setCart([...cart, mandala]);
		}
	};

	const isInCart = id => {
		return cart.some(item => item.id === id);
	};

	const clearCart = () => {
		setCart([]);
	};

	const getTotalQuantity = () => {
		return cart.reduce((acc, item) => {
			return acc + item.quantity;
		}, 0);
	};

	const getTotalPrice = () => {
		let totalPrice = cart.reduce((acc, item) => {
			return acc + item.quantity * item.price;
		}, 0);

		return totalPrice;
	};

	const deleteMandalaById = id => {
		const newCart = cart.filter(item => item.id !== id); // []
		setCart(newCart);
	};

	const getQuantityById = id => {
		const mandalaSelected = cart.find(item => item.id === id);
		return mandalaSelected?.quantity;
	};

	let data = {
		cart,
		addToCart,
		clearCart,
		getTotalQuantity,
		getTotalPrice,
		deleteMandalaById,
		getQuantityById,
	};

	return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
