import {Box} from '@mui/material';
import {RiShoppingCartLine} from 'react-icons/ri';

const CartWidget = () => {
	return (
		<Box sx={{display: 'flex'}}>
			<h4>Carrito</h4>
			<RiShoppingCartLine />
		</Box>
	);
};

export default CartWidget;
