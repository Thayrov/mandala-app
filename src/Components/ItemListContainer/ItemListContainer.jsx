import {useEffect, useState} from 'react';

import ItemList from '../ItemList/ItemList';
import {MANDALAS} from '../../data/dataMock';
import {useParams} from 'react-router-dom';

const ItemListContainer = () => {
	const {categoryName} = useParams();

	const [mandalas, setMandalas] = useState([]);

	const filteredMandalas = MANDALAS.filter(m => m.category === categoryName);

	useEffect(() => {
		const mandalaData = new Promise((resolve, reject) => {
			resolve(categoryName ? filteredMandalas : MANDALAS);
		});

		mandalaData
			.then(res => {
				setMandalas(res);
			})
			.catch(error => {
				console.log(error);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [categoryName]);

	return <ItemList mandalas={mandalas} />;
};
export default ItemListContainer;
