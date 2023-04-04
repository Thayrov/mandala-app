import {Badge, Box} from '@mui/material';

import {CartContext} from '../../Context/CartContext';
import {Link} from 'react-router-dom';
import {RiShoppingCartLine} from 'react-icons/ri';
import {useContext} from 'react';

const CartWidget = () => {
	const {getTotalQuantity} = useContext(CartContext);

	const total = getTotalQuantity();
	return (
		<Link to="/cart">
			<Box
				px={2}
				sx={{display: 'flex', justifyContent: 'flex-end', color: 'info.main'}}>
				<Badge
					badgeContent={total}
					color="secondary"
					showZero
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'right',
					}}>
					<RiShoppingCartLine size={30} />
				</Badge>
			</Box>
		</Link>
	);
};

export default CartWidget;
