import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import { motion } from 'framer-motion';

const trips = [
  {
    title: 'Honeymoon',
    image: 'https://media.gettyimages.com/id/157430171/photo/couple-relaxing-on-the-beach.jpg?s=612x612&w=0&k=20&c=mNw9Or4D0Y5Ha72REw2J5BLezVHrVi6l64Z-B64dKr8=',
    description:
      'Romantic escapes for couples looking to celebrate love in scenic locations.',
    price: '$1,500 per couple',
  },
  {
    title: 'Family',
    image: 'https://media.gettyimages.com/id/1888326378/photo/young-girl-and-adult-friends-splash-in-the-ocean-together.jpg?s=612x612&w=0&k=20&c=XViuOjm2Di04OxugsmJSrJbh1gdxeLA0zxXIBGQuIRw=',
    description:
      'Fun-filled family packages with kid-friendly activities and accommodations.',
    price: '$2,000 per family',
  },
  {
    title: 'Adventure',
    image: 'https://media.gettyimages.com/id/1511069617/photo/women-hikers-embracing-the-untamed-beauty-of-tasmania-through-exhilarating-bushwalking.jpg?s=612x612&w=0&k=20&c=T8sDlMsvby3usWMjkdvQobeMycD0YkwyreeRF9VFWE8=',
    description:
      'For thrill-seekers: mountain climbing, white-water rafting, and more.',
    price: '$1,200 per person',
  },
  {
    title: 'Cultural Tours',
    image: 'https://media.gettyimages.com/id/2149074815/photo/women-standing-in-front-of-colorful-woven-baskets-and-bags-on-a-market-stall-in-the-souk-in.jpg?s=612x612&w=0&k=20&c=xP41T4apYCwj3XfhM8fb_3Xk3YH386vqGlWo9qNfx7k=',
    image: 'https://media.gettyimages.com/id/501917090/photo/masai-people-running-on-the-beach-jpg.jpg?s=612x612&w=0&k=20&c=RsBmja5iNbKjTAvu3asMHXIxyt_wi99yExety7zFQQ8=',
    description:
      'Engage with local traditions, communities, and festivals across Kenya.',
    price: '$1,000 per person',
  },
  {
    title: 'Wildlife Safaris',
    image: 'https://media.gettyimages.com/id/1366882126/photo/safari-jungle.jpg?s=612x612&w=0&k=20&c=FKbaJ6C0S8-DPX5KBRMpHpYrUuOmCDC6V8zMNCZiwTE=',
    description:
      'Experience Kenya’s iconic wildlife across stunning national parks.',
    price: '$1,300 per person',
  },
  {
    title: 'Eco-Tours',
    image: 'https://media.gettyimages.com/id/452308574/photo/honduras-roatan-island-botanical-garden-tour-marcel-lichtenstein.jpg?s=612x612&w=0&k=20&c=2z1_bSETm9QDLeKIgD0ouaXAy_vXwEo5Q4xHb631zgc=',
    description:
      'Sustainable travel packages for environmentally-conscious explorers.',
    price: '$1,000 per person',
  },
  {
    title: 'Luxury Vacations',
    image: 'http://mickeysdreamvacations.com/uploads/1/2/1/4/12146140/published/beaches.jpg?1645475574',
    description:
      'Indulge in 5-star resorts, private tours, and top-tier service.',
    price: '$3,000+ per person',
  },
  {
    title: 'Beach Holidays',
    image: 'https://media.gettyimages.com/id/1459589072/photo/woman-sitting-on-bangka-boat-approaching-a-tropical-island.jpg?s=612x612&w=0&k=20&c=MzCFV2wOjrOMe6zPBT0UVa-YI-qvpSoiEPP6iCUQguk=',
    description:
      'Relax on Kenya’s white-sand beaches with oceanfront stays and sun.',
    price: '$1,800 per person',
  },
  {
    title: 'Wellness Retreats',
    image: 'https://media.gettyimages.com/id/611087030/photo/woman-receiving-a-massage-at-a-beautiful-villa-in-caribbean.jpg?s=612x612&w=0&k=20&c=8TAbHP8zknnejL4C384rZOPbYlqOuNyAM2cEqkzKZiM=',
    description:
      'Recharge your mind and body with yoga, meditation, and spa experiences.',
    price: '$1,600 per person',
  },
  {
    title: 'Culinary Tours',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/16/d0/87/caption.jpg?w=800&h=600&s=1',
    description:
      'Savor local cuisines and culinary experiences with expert chefs.',
    price: '$1,200 per person',
  },
];

const Trips = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
    <Box sx={{ py: 10, px: 3 }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Our Trip Packages
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {trips.map((trip, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                transition: '0.3s',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={trip.image}
                alt={trip.title}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {trip.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  {trip.description}
                </Typography>
                <Typography variant="subtitle2" fontWeight="bold" color="primary">
                  {trip.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
       </motion.div>
  );
};

export default Trips;
