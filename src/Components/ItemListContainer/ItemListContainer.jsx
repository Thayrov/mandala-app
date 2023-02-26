import {Box} from '@mui/material';

const ItemListContainer = ({greeting}) => {
	return (
		<Box p={5}>
			<h2>{greeting}</h2>
		</Box>
	);
};
export default ItemListContainer;
