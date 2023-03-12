import {Box, Typography} from '@mui/material';

import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({mandala, onAdd}) => {
	return (
		<Box
			key={mandala.id}
			sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
			<Typography variant="h2">{mandala.title}</Typography>
			<img src={mandala.img} alt={mandala.details} />
			<Typography variant="body1">{mandala.details}</Typography>
			<ItemCount stock={mandala.stock} onAdd={onAdd} />
		</Box>
	);
};

export default ItemDetail;
