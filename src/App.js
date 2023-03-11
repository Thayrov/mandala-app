import {Box, Grid, Typography} from '@mui/material';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Footer from './Components/Footer/Footer';
import ItemDetail from './Components/ItemDetail/ItemDetail';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/Navbar/Navbar';
import ProductCard from './Components/ProductCard/ProductCard';

function App() {
	return (
		<BrowserRouter>
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
						<Routes>
							<Route path="/" element={<ProductCard />} />
							<Route path="/itemDetail/:id" element={<ItemDetail />} />
							<Route
								path="/greeting"
								element={<ItemListContainer greeting={'¡Hola buen día! 🦄'} />}
							/>
							<Route
								path="*"
								element={
									<Typography>error 404: página no encontrada</Typography>
								}
							/>
						</Routes>
					</Grid>
					<Grid item xs={12}>
						<Footer />
					</Grid>
				</Grid>
			</Box>
		</BrowserRouter>
	);
}

export default App;
