import {Box} from '@mui/material';

const ProductCard = () => {
	return (
		<Box p={5} sx={{display: 'flex', justifyContent: 'center', height: '60vh'}}>
			<img
				src="https://res.cloudinary.com/dhjlbf6xs/image/upload/v1677270120/MandalaApp/undraw_making_art_re_ee8w_zrdaqb.svg"
				alt="woman drawing"
			/>
		</Box>
	);
};

export default ProductCard;
