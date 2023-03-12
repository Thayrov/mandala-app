import {
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	IconButton,
	Typography,
} from '@mui/material';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {Link} from 'react-router-dom';

const ProductCard = ({mandala}) => {
	return (
		<Card
			p={5}
			sx={{
				margin: 8,
				minHeight: 500,
				maxWidth: 345,
				textAlign: 'center',
				color: '#0a121f',
				backgroundColor: '#DBD3E7',
			}}>
			<CardHeader sx={{fontStyle: 'italic'}} title={mandala.title} />
			<CardMedia
				component="img"
				height="345"
				image={mandala.img}
				alt={mandala.details}
			/>
			<CardContent>
				<Typography sx={{fontWeight: 'bold'}}>
					Precio: $ {mandala.price}
				</Typography>
			</CardContent>
			<CardActions sx={{justifyContent: 'center'}}>
				<Link to={`/item/${mandala.id}`}>
					<IconButton aria-label="Más información y detalles">
						<InfoOutlinedIcon />
						<Typography sx={{fontStyle: 'italic'}}>
							Más información y detalles
						</Typography>
					</IconButton>
				</Link>
			</CardActions>
		</Card>
	);
};

export default ProductCard;
