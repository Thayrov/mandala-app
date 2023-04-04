import {Box, Button, Typography} from '@mui/material';
import {FcEmptyTrash, FcFullTrash} from 'react-icons/fc';
import {useContext, useState} from 'react';

import {CartContext} from '../../Context/CartContext';
import FormCheckout from '../FormCheckout/FormCheckout';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import {TiArrowBack} from 'react-icons/ti';

const Cart = () => {
	const {cart, clearCart, getTotalPrice, deleteMandalaById} =
		useContext(CartContext);
	const [showForm, setShowForm] = useState(false);
	const [orderId, setOrderId] = useState(null);

	const clear = () => {
		Swal.fire({
			title: '¿Deseas vaciar el carrito?',
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: 'Si',
			denyButtonText: 'No',
		}).then(result => {
			if (result.isConfirmed) {
				clearCart();
				Swal.fire('Carrito vaciado exitosamente', '', 'success');
			} else if (result.isDenied) {
				Swal.fire('No hubo cambios en el carrito', '', 'info');
			}
		});
	};
	const [isHover, setIsHover] = useState(false);

	const clearById = () => {
		Swal.fire({
			title: '¿Estás segur@?',
			text: '¡Esto no se puede revertir!',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: '¡Sí, borrar del carrito!',
		}).then(result => {
			if (result.isConfirmed) {
				cart.map(mandala => {
					return deleteMandalaById(mandala.id);
				});
				Swal.fire('¡Borrado!', '¡El mandala se borró del carrito.', 'success');
			}
		});
	};

	if (orderId) {
		return (
			<Box
				sx={{
					width: '100%',
					padding: '10vh 10vw',

					minHeight: '40vh',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',

					justifyContent: 'space-between',
				}}>
				<Typography variant="h5">Gracias por su compra</Typography>
				<Typography variant="h5">
					El folio de su compra es: '{orderId}'
				</Typography>
				<Link to="/tienda">Seguir comprando</Link>
			</Box>
		);
	}

	return (
		<Box
			sx={{
				width: '100%',
				padding: '10vh 10vw',
				minHeight: '80vh',
				display: 'flex',
				justifyContent: 'space-between',
			}}>
			{!showForm ? (
				<Box
					sx={{
						width: '100%',
						minHeight: '80%',
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
											width: '45%',
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

									<Box
										sx={{cursor: 'pointer'}}
										onMouseEnter={() => setIsHover(true)}
										onMouseLeave={() => setIsHover(false)}>
										{isHover ? (
											<FcFullTrash size="4em" onClick={clearById} />
										) : (
											<FcEmptyTrash size="4em" />
										)}
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
									onClick={() => setShowForm(true)}>
									Checkout
								</Button>
								<Button
									sx={{width: '200px'}}
									variant="contained"
									color="secondary"
									onClick={clear}>
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
			) : (
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '50px',
						border: '2px solid #7F669D',
						borderRadius: '10px',
						padding: '20px',
						margin: '0 20vh',
					}}>
					<FormCheckout
						cart={cart}
						getTotalPrice={getTotalPrice}
						setOrderId={setOrderId}
						clearCart={clearCart}
					/>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
							cursor: 'pointer',
						}}
						onClick={() => setShowForm(false)}>
						<TiArrowBack color="#7F669D" size="4em" />
						<Typography variant="h6">Volver al carrito</Typography>
					</Box>
				</Box>
			)}
		</Box>
	);
};
export default Cart;
