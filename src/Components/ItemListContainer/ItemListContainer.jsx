import {useEffect, useState} from 'react';

import ItemList from '../ItemList/ItemList';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const ItemListContainer = () => {
	const {id} = useParams();

	const [mandalas, setMandalas] = useState([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(false);
		const data = axios.get(
			id
				? `http://localhost:5000/mandalas?category=${id}`
				: 'http://localhost:5000/mandalas',
		);
		data.then(res => setMandalas(res.data));
	}, [loaded, id]);

	return <ItemList mandalas={mandalas} />;
};
export default ItemListContainer;
