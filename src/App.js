import {Box, Grid} from '@mui/material';

import Footer from './Components/Footer/Footer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/Navbar/Navbar';
import ProductCard from './Components/ProductCard/ProductCard';

function App() {
	return (
		<Box
			sx={{
				width: '100%',
				minHeight: '100vh',
				backgroundImage:
					'url(https://res.cloudinary.com/dhjlbf6xs/image/upload/v1677270121/MandalaApp/waveSvgBg_eybem7.png)',
				backgroundRepeat: 'no-repeat',
				backgroundAttachment: 'fixed',
				backgroundSize: 'cover',
			}}>
			<Grid container>
				<Grid item xs={12}>
					<Navbar />
				</Grid>
				<Grid item xs={12}>
					<ItemListContainer greeting={'¡Hola buen día! 🦄'} />
				</Grid>
				<Grid item xs={12}>
					<ProductCard />
				</Grid>
				<Grid item xs={12}>
					<Footer />
				</Grid>
			</Grid>
		</Box>
	);
}

export default App;
