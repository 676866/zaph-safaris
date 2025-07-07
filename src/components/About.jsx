import { Box, Typography, Container } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          About Zaph Tours
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Zaph Tours is a premier travel company based in Kenya, specializing in providing the best safaris and adventure tours.
          With a strong reputation for delivering exceptional travel experiences, Zaph Tours offers a variety of packages that
          showcase the natural beauty and cultural richness of Kenya and beyond.
          <br /><br />
          Our mission is to create unforgettable memories for our clients through unique, well-curated trips tailored to different needs,
          whether it’s a family vacation, romantic getaway, or an adventure with friends.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
