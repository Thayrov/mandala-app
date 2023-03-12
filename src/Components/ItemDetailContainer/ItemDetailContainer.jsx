import {Box, Typography} from '@mui/material';
import {useEffect, useState} from 'react';

import ItemCount from '../ItemCount/ItemCount';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
	const {id} = useParams();
	const [loaded, setLoaded] = useState(false);
	const [mandala, setMandala] = useState({});

	useEffect(() => {
		setLoaded(false);
		const data = axios.get(`http://localhost:5000/mandalas?id=${id}`);
		data.then(res => setMandala(res.data));
	}, [loaded, id]);

	const onAdd = n => {
		console.log(`Se agregó ${n} mandala(s) al carrito`);
	};

	return (
		<Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
			<Typography variant="h2">{mandala.title}</Typography>
			<img src={mandala.img} alt={mandala.details} />
			<Typography variant="body1">{mandala.details}</Typography>
			<ItemCount stock={mandala.stock} onAdd={onAdd} />
		</Box>
	);
};

export default ItemDetailContainer;
