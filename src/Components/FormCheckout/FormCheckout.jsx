import {Box, Button, TextField, Typography} from '@mui/material';
import React, {useState} from 'react';
import {addDoc, collection, doc, updateDoc} from 'firebase/firestore';

import {db} from '../../firebaseConfig';

const FormCheckout = ({cart, getTotalPrice, setOrderId, clearCart}) => {
	const [userData, setUserData] = useState({
		name: '',
		lastName: '',
		email: '',
		confirmEmail: '',
		phone: '',
		date: '',
	});

	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		if (userData.name.length < 1) {
			setError(true);
			setErrorMessage('Por favor ingrese su nombre');
			return;
		}
		if (userData.lastName.length < 1) {
			setError(true);
			setErrorMessage('Por favor ingrese su apellido');
			return;
		}
		const emailFormat =
			userData.email.includes('@') && userData.email.includes('.');

		if (!emailFormat) {
			setError(true);
			setErrorMessage('Por favor ingrese un email en formato correcto');
			return;
		}

		const sameEmail = userData.confirmEmail === userData.email;
		if (!sameEmail) {
			setError(true);
			setErrorMessage('Por favor ingrese el mismo email en la confirmación');
			return;
		}

		let now = Date.now();
		let today = new Date(now);
		let date = today.toLocaleDateString();

		let total = getTotalPrice();

		let order = {
			buyer: userData,
			items: cart,
			total,
			date,
		};

		let orderCollection = collection(db, 'orders');
		addDoc(orderCollection, order)
			.then(res => {
				setOrderId(res.id);
				clearCart();
			})
			.catch(err => console.log(err));

		cart.map(mandala => {
			let refDoc = doc(db, 'MANDALAS', mandala.id);

			updateDoc(refDoc, {stock: mandala.stock - mandala.quantity});
			return mandala;
		});
	};

	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'space-between',
				justifyContent: 'center',
			}}>
			<Typography variant="h6"> 🦄 Por favor ingrese sus datos:</Typography>
			<form onSubmit={handleSubmit}>
				<TextField
					required
					helperText="Por favor ingrese su nombre"
					color="secondary"
					margin="normal"
					fullWidth
					variant="standard"
					type="text"
					label="Nombre"
					value={userData.name}
					onChange={e => setUserData({...userData, name: e.target.value})}
				/>
				<TextField
					required
					helperText="Por favor ingrese su apellido"
					color="secondary"
					margin="normal"
					fullWidth
					variant="standard"
					type="text"
					label="Apellido"
					value={userData.lastName}
					onChange={e => setUserData({...userData, lastName: e.target.value})}
				/>
				<TextField
					required
					helperText="Por favor ingrese su email"
					color="secondary"
					margin="normal"
					fullWidth
					variant="standard"
					type="email"
					label="Email"
					value={userData.email}
					onChange={e => setUserData({...userData, email: e.target.value})}
				/>
				<TextField
					required
					helperText="Por favor confirme su email"
					color="secondary"
					margin="normal"
					fullWidth
					variant="standard"
					type="email"
					label="Confirmar Email"
					value={userData.confirmEmail}
					onChange={e =>
						setUserData({...userData, confirmEmail: e.target.value})
					}
				/>
				<TextField
					required
					helperText="Por favor ingrese su teléfono en el formato indicado"
					color="secondary"
					margin="normal"
					fullWidth
					variant="standard"
					type="tel"
					label="Teléfono (000-000-00-00)"
					value={userData.phone}
					pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
					onChange={e => setUserData({...userData, phone: e.target.value})}
				/>

				<Button
					sx={{marginTop: '20px'}}
					variant="contained"
					color="secondary"
					type="submit">
					Comprar
				</Button>
				{error && <Typography variant="h6">{errorMessage}</Typography>}
			</form>
		</Box>
	);
};

export default FormCheckout;
