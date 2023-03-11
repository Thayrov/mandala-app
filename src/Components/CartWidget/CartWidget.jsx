import {Box, Typography} from '@mui/material';

import {RiShoppingCartLine} from 'react-icons/ri';

const CartWidget = () => {
	return (
		<Box
			px={2}
			sx={{display: 'flex', justifyContent: 'flex-end', color: 'primary.dark'}}>
			<RiShoppingCartLine size={25} />
			<Typography variant="h8">0</Typography>
		</Box>
	);
};

export default CartWidget;
