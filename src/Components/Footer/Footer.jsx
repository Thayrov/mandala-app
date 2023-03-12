import {Box, Typography} from '@mui/material';

const Footer = () => {
	return (
		<Box
			py={2}
			sx={{
				position: 'sticky',
				alignItems: 'flex-end',
				justifyContent: 'flex-end',
				width: '100%',
				textAlign: 'center',
			}}>
			<Typography>
				Este es un proyecto académico realizado por Thayrov García
			</Typography>
		</Box>
	);
};

export default Footer;
