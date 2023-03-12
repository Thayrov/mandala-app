import {Box, Grid, Typography} from '@mui/material';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {
	Footer,
	Home,
	ItemDetailContainer,
	ItemListContainer,
	Navbar,
} from './Components';

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
							<Route path="/" element={<Home />} />
							<Route path="/tienda" element={<ItemListContainer />} />
							<Route path="/category/:id" element={<ItemListContainer />} />
							<Route path="/item/:id" element={<ItemDetailContainer />} />
							<Route path="/producto" element={<ProductCard />} />
							<Route
								path="/galería"
								element={
									<Typography
										sx={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
										}}>
										Página en construcción
									</Typography>
								}
							/>
							<Route
								path="/contacto"
								element={
									<Typography
										sx={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
										}}>
										Página en construcción
									</Typography>
								}
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
