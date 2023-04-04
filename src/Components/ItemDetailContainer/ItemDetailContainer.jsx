import React, {useContext, useEffect, useState} from 'react';
import {collection, doc, getDoc} from 'firebase/firestore';

import {CartContext} from '../../Context/CartContext';
import ItemDetail from '../ItemDetail/ItemDetail';
import Swal from 'sweetalert2';
import {db} from '../../firebaseConfig';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
	const {id} = useParams();
	const {addToCart, getQuantityById} = useContext(CartContext);

	const [selectedMandala, setSelectedMandala] = useState({});

	useEffect(() => {
		const itemCollection = collection(db, 'MANDALAS');
		const ref = doc(itemCollection, id);
		getDoc(ref).then(res => {
			setSelectedMandala({
				...res.data(),
				id: res.id,
			});
		});
	}, [id]);

	const onAdd = n => {
		let mandala = {
			...selectedMandala,
			quantity: n,
		};

		addToCart(mandala);
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Se agregó el mandala al carrito',
			showConfirmButton: false,
			timer: 1500,
		});
	};
	let quantity = getQuantityById(Number(id));

	return (
		<ItemDetail mandala={selectedMandala} onAdd={onAdd} quantity={quantity} />
	);
};

export default ItemDetailContainer;
