import { Box, Typography, TextField, Button, Container, Stack } from '@mui/material';

const Newsletter = () => {
  return (
    <Box sx={{ py: 10, bgcolor: '#A1EEBD', color: 'black' }}>
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Stay Updated
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Sign up for weekly updates on safaris, adventures, and travel tips!
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
          <TextField
            variant="outlined"
            placeholder="Enter your email"
            fullWidth
            sx={{
              bgcolor: 'white',
              borderRadius: '5px',
              input: { color: 'black', px: 2 },
            }}
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: '#ffffff',
              color: '#d50057',
              fontWeight: 'bold',
              '&:hover': {
                bgcolor: '#f8f8f8',
              },
            }}
          >
            Subscribe
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Newsletter;
