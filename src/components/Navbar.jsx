import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" 
    sx={{ bgcolor: '#C0C9EE', boxShadow: 'none' }}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ color: '#000', flexGrow: 1, fontSize: 18, fontWeight: 'bold' }}
        >
          ZAPH TRAVELS
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={Link}
            to="/"
            sx={{ color: '#000', fontWeight: 'bold', textTransform: 'none' }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/destinations"
            sx={{ color: '#000', fontWeight: 'bold', textTransform: 'none' }}
          >
            Destinations
          </Button>
          <Button
            component={Link}
            to="/trips"
            sx={{ color: '#000', fontWeight: 'bold', textTransform: 'none' }}
          >
            Trips
          </Button>
          <Button
            component={Link}
            to="/contact"
            sx={{ color: '#000', fontWeight: 'bold', textTransform: 'none' }}
          >
            Contacts
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
