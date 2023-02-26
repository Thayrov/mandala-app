import {Box, Typography} from '@mui/material';

const ItemListContainer = ({greeting}) => {
	return (
		<Box p={5}>
			<Typography
				variant="h2"
				sx={{color: 'primary.main', display: 'flex', justifyContent: 'center'}}>
				{greeting}
			</Typography>
		</Box>
	);
};
export default ItemListContainer;
