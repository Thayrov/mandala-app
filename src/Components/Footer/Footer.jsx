import {Box, Typography} from '@mui/material';

const Footer = () => {
	return (
		<Box
			py={2}
			sx={{
				width: '100%',
				height: '8vh',
				position: 'absolute',
				bottom: '0',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<Typography>
				Este es un proyecto académico realizado por Thayrov García
			</Typography>
		</Box>
	);
};

export default Footer;
