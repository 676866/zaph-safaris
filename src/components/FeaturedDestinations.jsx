import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const destinations = [
  {
    name: "Mt. Kenya",
    image: "https://lp-cms-production.imgix.net/2022-06/4-Shipton-Camp--rfc.jpg?auto=format,compress&q=72&fit=crop",
    description: "Trek Africa's second-highest peak and explore alpine landscapes.",
    price: "$850",
  },
  {
    name: "Mt. Ruwenzori",
    image: "https://i0.wp.com/www.gorilla-tracking.com/wp-content/uploads/2019/09/rwenzori-mountains1.jpg?fit=1440%2C810&ssl=1",
    description: "A mystical mountain range with glaciers and lush valleys.",
    price: "$950",
  },
  {
    name: "Lake Nakuru",
    image: "https://www.lakenakurukenya.com/wp-content/uploads/2020/09/The-Wonders-of-Lake-Nakuru-National-Park--750x389.jpg",
    description: "Famous for flamingos and rhinos in a scenic Rift Valley setting.",
    price: "$600",
  },
  {
    name: "Tsavo National Park",
    image: "https://www.tsavonationalparkkenya.com/wp-content/uploads/2020/04/Tsavo-National-Park-750x450.jpg",
    description: "Home to the big five, vast savannahs, and red elephants.",
    price: "$700",
  },
  {
    name: "Nairobi National Park",
    image: "https://lh6.googleusercontent.com/proxy/iRAukrEXF-23ASB1NKK9rV3sTJ-eSuWmuXpaiTZeq5xxOJxntW2k0s0WlBhs-EvTpC9xbKIZ05a_mbQGCGWQ04pGgYGBsh4MBnfSnDujyj1ydQwWUzqmypOX9-WthwZboZ8rL5anN0fPOcxRjg",
    description: "Wildlife next to the city skyline — unique and accessible.",
    price: "$500",
  },
  {
    name: "Coastal Kenya",
    image: "https://cloudfront.safaribookings.com/blog/2024/01/07-Top_10_Places_to_Visit_Along_the_Kenya_Coast-BW-1600px.jpg",
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
