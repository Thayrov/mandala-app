import {useEffect, useState} from 'react';

import ItemDetail from '../ItemDetail/ItemDetail';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
	const {id} = useParams();
	const [loaded, setLoaded] = useState(false);
	const [mandala, setMandala] = useState({});

	useEffect(() => {
		setLoaded(false);
		const data = axios.get(`http://localhost:5000/mandalas?id=${id}`);
		data.then(res => setMandala(res.data[0]));
	}, [loaded, id]);

	const onAdd = n => {
		console.log(`Se agregó ${n} mandala(s) al carrito`);
	};

	return <ItemDetail mandala={mandala} onAdd={onAdd} />;
};

export default ItemDetailContainer;
