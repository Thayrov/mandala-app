import {Box, Button, Typography} from '@mui/material';

import {useState} from 'react';

const ItemCount = ({stock, initial = 1, onAdd}) => {
	const [counter, setCounter] = useState(initial);

	const sumar = () => {
		if (counter < stock) {
			setCounter(counter + 1);
		}
	};

	const restar = () => {
		if (counter > 1) {
			setCounter(counter - 1);
		}
	};

	return (
		<Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
			<Box>
				<Typography>{counter}</Typography>
			</Box>
			<Box sx={{gap: '10'}}>
				<Button
					variant="outlined"
					size="small"
					color="secondary"
					onClick={sumar}>
					Sumar
				</Button>
				<Button
					variant="outlined"
					size="small"
					color="secondary"
					onClick={restar}>
					Restar
				</Button>
			</Box>
			<Button
				variant="outlined"
				size="small"
				color="secondary"
				onClick={() => onAdd(counter)}>
				Agregar al carrito
			</Button>
		</Box>
	);
};

export default ItemCount;
