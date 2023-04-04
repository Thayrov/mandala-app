import {Box, Button, Typography} from '@mui/material';

import {CartContext} from '../../Context/CartContext';
import {useContext} from 'react';

const Cart = () => {
	const {cart, clearCart, getTotalPrice} = useContext(CartContext);

	return (
		<Box
			sx={{
				width: '100%',
				padding: '10vh 10vw',
				minHeight: '80vh',
				display: 'flex',
				justifyContent: 'space-between',
			}}>
			<Box
				sx={{
					width: '50%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '50px',
					borderRight: '2px solid #7F669D',
					padding: '0 40px',
				}}>
				{cart.map(mandala => {
					return (
						<Box
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'space-between',
								minHeight: '13vh',
								alignItems: 'center',
								boxShadow: '0px 2px 5px 0px #7F669D',
								borderRadius: '10px',
								padding: '0 10px',
							}}
							key={mandala.id}>
							<img
								src={mandala.img}
								alt=""
								style={{
									width: '10vh',
									height: '10vh',
									borderRadius: '10px',
									objectFit: 'cover',
								}}
							/>
							<Box
								sx={{
									width: '35%',
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'flex-end',
								}}>
								<Typography variant="h5">{mandala.title}</Typography>
								<Typography variant="h6">
									Cantidad: {mandala.quantity}
								</Typography>
								<Typography variant="h6">
									$ {mandala.price}.00 por unidad
								</Typography>
							</Box>
						</Box>
					);
				})}
			</Box>
			<Box
				sx={{
					width: '50%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					color: '#7F669D',
				}}>
				{cart.length > 0 && (
					<Typography variant="h4">
						Precio total: $ {getTotalPrice()}.00
					</Typography>
				)}
				{cart.length > 0 ? (
					<Box
						sx={{
							display: 'flex',
							width: '100%',
							gap: '20px',
							justifyContent: 'center',
							paddingTop: '5vh',
						}}>
						<Button
							sx={{width: '200px'}}
							variant="contained"
							onClick={() => {}}>
							Checkout
						</Button>
						<Button
							sx={{width: '200px'}}
							variant="contained"
							color="secondary"
							onClick={clearCart}>
							Vaciar carrito
						</Button>
					</Box>
				) : (
					<Box
						sx={{
							display: 'flex',
							width: '100%',
							flexDirection: 'column',
							gap: '20px',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<img
							src="https://res.cloudinary.com/dhjlbf6xs/image/upload/v1680580557/MandalaApp/undraw_empty_cart_co35_mw53tm.svg"
							alt=""
							style={{
								width: '30vh',
								height: '30vh',
								borderRadius: '10px',
								objectFit: 'cover',
							}}
						/>
						<Typography
							sx={{
								paddingTop: '5vh',
							}}
							variant="h3">
							El carrito está vacío
						</Typography>
					</Box>
				)}
			</Box>
		</Box>
	);
};
export default Cart;
