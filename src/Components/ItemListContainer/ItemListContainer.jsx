import {collection, getDocs, query, where} from 'firebase/firestore';
import {useEffect, useState} from 'react';

import {Box} from '@mui/material';
import CircleLoader from 'react-spinners/CircleLoader';
import ItemList from '../ItemList/ItemList';
import {db} from '../../firebaseConfig';
import {useParams} from 'react-router-dom';

const ItemListContainer = () => {
	const {categoryName} = useParams();

	const [mandalas, setMandalas] = useState([]);

	useEffect(() => {
		const itemsCollection = collection(db, 'MANDALAS');

		let ask = undefined;

		if (categoryName) {
			const q = query(itemsCollection, where('category', '==', categoryName));
			ask = getDocs(q);
		} else {
			ask = getDocs(itemsCollection);
		}
		ask.then(res => {
			let mandalas = res.docs.map(mandala => {
				return {
					...mandala.data(),
					id: mandala.id,
				};
			});
			setMandalas(mandalas);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [categoryName]);

	if (mandalas.length === 0) {
		return (
			<Box sx={{display: 'flex', justifyContent: 'center'}}>
				<CircleLoader
					color={'#7F669D'}
					size={100}
					aria-label="Loading Spinner"
					data-testid="loader"
				/>
			</Box>
		);
	}

	return <ItemList mandalas={mandalas} />;
};
export default ItemListContainer;
