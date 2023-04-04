import React, {useContext} from 'react';

import {CartContext} from '../../Context/CartContext';
import ItemDetail from '../ItemDetail/ItemDetail';
import {MANDALAS} from '../../data/dataMock';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
	const {id} = useParams();
	const {addToCart} = useContext(CartContext);

	const selectedMandala = MANDALAS.find(m => m.id === id);

	const onAdd = n => {
		let mandala = {
			...selectedMandala,
			quantity: n,
		};

		addToCart(mandala);
	};

	return <ItemDetail mandala={selectedMandala} onAdd={onAdd} />;
};

export default ItemDetailContainer;
