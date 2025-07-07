import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const destinations = [
  {
    name: "Mt. Kenya",
    image: "/public/Mt.Kenya.avif",
    description: "Trek Africa's second-highest peak and explore alpine landscapes.",
    price: "$850",
  },
  {
    name: "Mt. Ruwenzori",
    image: "public/Mt.Ruwenzori.avif",
    description: "A mystical mountain range with glaciers and lush valleys.",
    price: "$950",
  },
  {
    name: "Lake Nakuru",
    image: "public/Lake Nakuru.avif",
    description: "Famous for flamingos and rhinos in a scenic Rift Valley setting.",
    price: "$600",
  },
  {
    name: "Tsavo National Park",
    image: "public/Tsavo National Park.avif",
    description: "Home to the big five, vast savannahs, and red elephants.",
    price: "$700",
  },
  {
    name: "Nairobi National Park",
    image: "public/Nairobi National Park.avif",
    description: "Wildlife next to the city skyline — unique and accessible.",
    price: "$500",
  },
  {
    name: "Coastal Kenya",
    image: "public/Coastal Kenya.avif",
    description: "Relax on white sandy beaches and enjoy Swahili culture.",
    price: "$1,200",
  },
];

const FeaturedDestinations = () => {
  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: "#fff" }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Featured Destinations
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {destinations.map((destination, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%',transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.03)',
      boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.1)',
    }, }}>
              <CardMedia
                component="img"
                height="200"
                image={destination.image}
                alt={destination.name}
                sx={{
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'scale(1.05)',
      },
    }}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {destination.name}
                </Typography>
                <Typography variant="body2" sx={{ my: 1 }}>
                  {destination.description}
                </Typography>
                <Typography variant="subtitle2" fontWeight="bold">
                  Starting at: {destination.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedDestinations;
