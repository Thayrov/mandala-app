import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Typography,
} from '@mui/material';

import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({mandala, onAdd}) => {
	return (
		<Box
			key={mandala.id}
			sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
			<Card
				p={5}
				sx={{
					minHeight: 600,
					maxWidth: 600,
					textAlign: 'center',
					color: '#0a121f',
					backgroundColor: '#DBD3E7',
				}}>
				<CardHeader sx={{fontStyle: 'italic'}} title={mandala.title} />
				<CardMedia
					component="img"
					height="450"
					image={mandala.img}
					alt={mandala.details}
				/>
				<CardContent>
					<Typography variant="body1">{mandala.details}</Typography>
				</CardContent>
				<CardActions sx={{justifyContent: 'center'}}>
					<ItemCount stock={mandala.stock} onAdd={onAdd} />
				</CardActions>
			</Card>
		</Box>
	);
};

export default ItemDetail;
