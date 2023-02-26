import {Box, Typography} from '@mui/material';

import {RiShoppingCartLine} from 'react-icons/ri';

const CartWidget = () => {
	return (
		<Box
			px={2}
			sx={{display: 'flex', justifyContent: 'flex-end', color: 'primary.dark'}}>
			<Typography variant="h8">Carrito</Typography>
			<RiShoppingCartLine size={25} />
		</Box>
	);
};

export default CartWidget;
