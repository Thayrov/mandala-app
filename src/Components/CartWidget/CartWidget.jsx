import {Badge, Box} from '@mui/material';

import {RiShoppingCartLine} from 'react-icons/ri';

const CartWidget = () => {
	return (
		<Box
			px={2}
			sx={{display: 'flex', justifyContent: 'flex-end', color: 'primary.dark'}}>
			<Badge
				badgeContent={0}
				color="primary"
				showZero
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}>
				<RiShoppingCartLine size={25} />
			</Badge>
		</Box>
	);
};

export default CartWidget;
