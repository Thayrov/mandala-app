import {Box, Grid, Typography} from '@mui/material';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {
	Cart,
	Footer,
	Home,
	ItemDetailContainer,
	ItemListContainer,
	Navbar,
	ProductCard,
} from './Components';

import CartContextProvider from './Context/CartContext';

function App() {
	return (
		<BrowserRouter>
			<CartContextProvider>
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
								<Route
									path="/category/:categoryName"
									element={<ItemListContainer />}
								/>
								<Route path="/item/:id" element={<ItemDetailContainer />} />
								<Route path="/producto" element={<ProductCard />} />
								<Route path="/cart" element={<Cart />} />
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
			</CartContextProvider>
		</BrowserRouter>
	);
}

export default App;
