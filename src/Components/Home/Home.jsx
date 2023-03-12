import {Box, Typography} from '@mui/material';

const Home = () => {
	return (
		<Box
			p={5}
			mt={20}
			sx={{
				display: 'flex',
				height: '45vh',
				justifyContent: 'center',
				alignItems: 'center',
				marginBottom: '23vh',
			}}>
			<img
				src="https://res.cloudinary.com/dhjlbf6xs/image/upload/v1677270120/MandalaApp/undraw_making_art_re_ee8w_zrdaqb.svg"
				height="450"
				alt="woman drawing"
			/>
			<Typography variant="h3" sx={{fontStyle: 'italic'}}>
				En esta página podrás adquirir hermosos mandalas pintados a mano y que
				adornarán tus días 🦄
			</Typography>
		</Box>
	);
};

export default Home;
