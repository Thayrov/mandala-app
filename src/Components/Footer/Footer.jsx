import {Box, Typography} from '@mui/material';

const Footer = () => {
	return (
		<Box
			py={2}
			sx={{
				position: 'fixed',
				bottom: 0,
				alignItems: 'flex-end',
				justifyContent: 'flex-end',
				width: '100%',
				textAlign: 'center',
				minHeight: '5%',
				backgroundColor: 'info.main',
				marginTop: '5%',
			}}>
			<Typography sx={{color: 'secondary.light'}}>
				Este es un proyecto académico realizado por Thayrov García
			</Typography>
		</Box>
	);
};

export default Footer;
