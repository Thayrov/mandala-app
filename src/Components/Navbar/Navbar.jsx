import {Box, Button, Grid} from '@mui/material';

import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
	return (
		<Box
			py={1}
			sx={{
				width: '100%',
				height: '8vh',
				backgroundColor: 'palette.secondary.light',
			}}>
			<Grid container sx={{display: 'flex'}}>
				<Grid item xs={12} md={3} lg={2}>
					<Link to="/" className={styles.logo}>
						<img
							src="https://res.cloudinary.com/dhjlbf6xs/image/upload/v1677270121/MandalaApp/undraw_flower_1_mdvjaw.svg"
							alt="logo"
							width={40}
						/>
						<p>Mandala App</p>
					</Link>
				</Grid>
				<Grid item xs={12} md={6} lg={8}>
					<ul className={styles.containerList}>
						<Link to="/tienda">
							<Button variant="outlined" size="small">
								Tienda
							</Button>
						</Link>
						<li>
							<Button variant="outlined" size="small">
								Galería
							</Button>
						</li>
						<li>
							<Button variant="outlined" size="small">
								Contacto
							</Button>
						</li>
					</ul>
				</Grid>

				<Grid item xs={12} md={3} lg={2}>
					<CartWidget />
				</Grid>
			</Grid>
		</Box>
	);
};

export default Navbar;
