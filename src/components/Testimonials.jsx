import { Box, Typography, Grid, Avatar, Paper, Stack } from '@mui/material';
import { Rating } from '@mui/material';


const testimonials = [
  {
    name: 'Mesh',
    image: 'Frankit.jpg',
    quote:
      'Zaph Tours gave us the best honeymoon experience ever. Highly recommended!',
          rating: 5,
  },
  {
    name: 'Antony',
    image: 'Antony.avif',
    quote:
      'Everything was smooth, from booking to the safari itself. Thank you Zaph!',
          rating: 4,
  },
  {
    name: 'Brian ',
    image: 'public/brianbett.jpeg',
    quote:
      'I loved the cultural tours and got to meet amazing local communities.',
        rating: 4.5,
  },
  {
    name: 'Pruddy',
    image: 'pruddy.jpg',
    quote:
      'The beach holiday was top-notch. Will book again with Zaph Tours!',
      rating: 5,
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 10, px: 3, bgcolor: '#F5F7FA' }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        What Our Happy Clients Say
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }} justifyContent="center">
        {testimonials.map((t, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 3,
                textAlign: 'center',
                transition: '0.3s',
                '&:hover': {
                  boxShadow: '0px 8px 30px rgba(0,0,0,0.1)',
                  transform: 'translateY(-5px)',
                },
              }}
            >
              <Avatar
                src={t.image}
                alt={t.name}
                sx={{
                  width: 80,
                  height: 80,
                  mx: 'auto',
                  mb: 2,
                }}
              />
              <Typography variant="subtitle1" fontWeight="bold">
                {t.name}
              </Typography>
              <Rating
  name={`rating-${i}`}
  value={t.rating}
  precision={0.5}
  readOnly
  sx={{ mt: 1 }}
/>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                “{t.quote}”
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
