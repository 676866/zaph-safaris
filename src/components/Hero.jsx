import { Box, Typography, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000',
      }}
    >
      
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <source src="heros video.mp4" type="video/mp4" />
        
      </video>

      
      <Box sx={{ px: 2 }}>
        <Typography variant="h2" fontWeight="bold" color='white'>
          Best Safaris and Adventures
        </Typography>
        <Typography variant="h6" sx={{ color: 'white', mt: 1, mb: 4 }}>
          Explore the world with us
        </Typography>

        <TextField
          variant="outlined"
          placeholder="Where do you want to go?"
          sx={{
            width: '100%',
            maxWidth: 500,
            bgcolor: 'white',
            borderRadius: '50px',
            input: { px: 2 },
            colour:'black',
            mb: 3,
            border: 'none',

          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="primary" />
              </InputAdornment>
            ),
          }}
        />

       <Button
  component={Link}
  to="/destinations"
  variant="contained"
  sx={{
    bgcolor: '#1976d2',
    color: '#fff',
    fontWeight: 'bold',
    mt: 2,
    '&:hover': {
      bgcolor: '#1565c0',
    },
  }}
>
  Explore Our Destinations
</Button>

    </Box>
    </Box>
  );
};

export default Hero;
