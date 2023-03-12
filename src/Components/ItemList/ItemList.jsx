import {Box, Button} from '@mui/material';

import {Link} from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import React from 'react';

const ItemList = ({mandalas}) => {
	return (
		<Box>
			<Box
				mx={{xs: '10', md: '20', lg: '40'}}
				sx={{display: 'flex', justifyContent: 'space-around'}}>
				<Link to="/category/fondoBlanco">
					<Button variant="outlined" size="large" color="secondary">
						Mandalas Fondo Blanco
					</Button>
				</Link>
				<Link to="/category/fondoNegro">
					<Button variant="outlined" size="large" color="secondary">
						Mandalas Fondo Negro
					</Button>
				</Link>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'space-evenly',
				}}>
				{mandalas.map(mandala => {
					return <ProductCard key={mandala.id} mandala={mandala} />;
				})}
			</Box>
		</Box>
	);
};

export default ItemList;
