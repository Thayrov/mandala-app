import ItemDetail from '../ItemDetail/ItemDetail';
import {MANDALAS} from '../../data/dataMock';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
	const {id} = useParams();

	const selectedMandala = MANDALAS.find(m => m.id === id);

	const onAdd = n => {
		console.log(`Se agregó ${n} mandala(s) al carrito`);
	};

	return <ItemDetail mandala={selectedMandala} onAdd={onAdd} />;
};

export default ItemDetailContainer;
