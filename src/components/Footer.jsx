import { Box, Typography, Grid, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#C0C9EE', color: '#000', py: 5, px: 3, mt: 10 }}>
      <Grid container spacing={4}>
        
        <Grid item xs={12} md={6}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Zaph Tours
          </Typography>
          <Typography variant="body2" gutterBottom>
            Best Safaris and Adventures
          </Typography>
        </Grid>

        
        <Grid item xs={12} md={6}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Quick Links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link component={RouterLink} to="/" underline="hover" color="inherit">
              Home
            </Link>
            <Link component={RouterLink} to="/destinations" underline="hover" color="inherit">
              Destinations
            </Link>
            <Link component={RouterLink} to="/trips" underline="hover" color="inherit">
              Trips
            </Link>
            <Link component={RouterLink} to="/contact" underline="hover" color="inherit">
              Contact
            </Link>
          </Box>
        </Grid>
      </Grid>

     
     <Typography variant="body2" align="center" sx={{ mt: 5 }}>
  © {new Date().getFullYear()} Zaph Tours. Build With ❤️ by Frankit. All rights reserved.
</Typography>

    </Box>
  );
};

export default Footer;
