import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';

const destinations = [
  {
    name: 'Mt. Kenya',
    image: 'https://media.istockphoto.com/id/147675654/photo/mount-kenya-at-sunrise.jpg?s=612x612&w=0&k=20&c=CgIySTbQfHRBzd37UNv5Y2MrzVg5M-sgQ7wRFi65v6k=',
    description: 'Trek through alpine forests and snowy peaks.',
    groupPrice: '$850 per group',
    soloPrice: '$300 per person',
  },
  {
    name: 'Mt. Ruwenzori',
    image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQzFq-T0dBHpUt1n5AO2pBLXRtOmJ5K8djy2iOLqRcA-nKdYtWvmIbpP11nQ1BU4-fJh1ZssnHEy7LiNSdsaP_SHNfLx6VywfzP_nDZUQ',
    description: 'Explore the mystical "Mountains of the Moon".',
    groupPrice: '$950 per group',
    soloPrice: '$350 per person',
  },
  {
    name: 'Lake Nakuru',
    image: 'https://www.shadowsofafrica.com/media/catalog/product/cache/1/image/900x/040ec09b1e35df139433887a97daa66f/s/h/shutterstock_403312213_2.jpg',
    description: 'See pink flamingos and black rhinos in one park.',
    groupPrice: '$600 per group',
    soloPrice: '$200 per person',
  },
  {
    name: 'Tsavo National Park',
    image: 'https://ruachsafaris.com/wp-content/uploads/2024/07/elephant-1-636x426.jpg',
    description: 'Home of red elephants, lions, and vast savannas.',
    groupPrice: '$700 per group',
    soloPrice: '$250 per person',
  },
  {
    name: 'Nairobi National Park',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ756nNq29uxcnsZMPHe_nBzQRuHcMe23DHRQ&s',
    description: 'Where wildlife meets the city skyline.',
    groupPrice: '$500 per group',
    soloPrice: '$180 per person',
  },
  {
    name: 'Coastal Kenya',
    image: 'https://ruachsafaris.com/wp-content/uploads/2024/07/voyager-beach-resort-1-1024x685.jpg',
    description: 'Swahili charm, beach sunsets, and coral reefs.',
    groupPrice: '$1200 per group',
    soloPrice: '$400 per person',
  },
  {
    name: 'Laikipia Conservancies',
    image: 'https://ruachsafaris.com/wp-content/uploads/2024/07/elewana-loisaba-lodo-5-636x426.jpg',
    description: 'Enjoy a serene environment with a nice view.',
    groupPrice: '$600 per group',
    soloPrice: '$200 per person',
  },
  {
    name: 'Samburu',
    image: 'https://ruachsafaris.com/wp-content/uploads/2024/07/sarova-shaba-game-lodge-636x426.jpg',
    description: 'Enjoy a night in a classic resort with a warmed swimming pool',
    groupPrice: '$600 per group',
    soloPrice: '$200 per person',
  },
  {
    name: 'Maasai Mara',
    image: 'https://ruachsafaris.com/wp-content/uploads/2024/07/crossing-636x426.jpg',
    description: 'Watch the wild beasts crossing river Mara',
    groupPrice: '$600 per group',
    soloPrice: '$200 per person',
  },
  {
    name: 'Watamu',
    image: 'https://ruachsafaris.com/wp-content/uploads/2024/07/kijani-7-636x426.jpg',
    description: 'Get served with the best swahili dishes in the world.',
    groupPrice: '$600 per group',
    soloPrice: '$200 per person',
  },
  {
    name: 'Lamu',
    image: 'https://ruachsafaris.com/wp-content/uploads/2024/07/southern-palms-beach-14-636x426.jpg',
    description: 'Enjoy classic coastal resort near the beach.',
    groupPrice: '$600 per group',
    soloPrice: '$200 per person',
  },
  {
    name: 'Diani',
    image: 'https://ruachsafaris.com/wp-content/uploads/2024/07/gede-cafe-and-pizzeria-636x426.jpg',
    description: 'Pristine white-sand, turquoise waters, and diverse marine life.',
    groupPrice: '$600 per group',
    soloPrice: '$200 per person',
  },
  {
    name: 'Elementaita',
    image: 'https://ruachsafaris.com/wp-content/uploads/2024/07/sentrim-elementaita-lodge-10-636x426.jpg',
    description: 'Watch unique hot springs and the scenic landscapes of the Rift Valley.',
    groupPrice: '$600 per group',
    soloPrice: '$200 per person',
  },
  {
    name: 'Nyahururu',
    image: 'https://ruachsafaris.com/wp-content/uploads/2024/07/img-20170625-091420-largejpg-636x426.jpg',
    description: 'Old Lodge looks amazing and the surrounding greenery makes it worth a visit.',
    groupPrice: '$600 per group',
    soloPrice: '$200 per person',
  },
  {
    name: 'Athi river',
    image: 'https://ruachsafaris.com/wp-content/uploads/2024/07/swara-acacia-lodge-6-636x426.jpg',
    description: 'Swara Acacia Lodge is your most convenient African escape.',
    groupPrice: '$600 per group',
    soloPrice: '$200 per person',
  },
  {
    name: 'Nanyuki',
    image: 'https://ruachsafaris.com/wp-content/uploads/2024/07/aberdare-prestige-royal-636x426.jpg',
    description: 'Gateway to Mount Kenya and various wildlife conservancies and farms.',
    groupPrice: '$700per group',
    soloPrice: '$250 per person',
  },
  {
    name: 'Nyeri',
    image: 'https://media.istockphoto.com/id/1694480835/photo/young-elephant.jpg?s=612x612&w=0&k=20&c=0-PbWwcWuGuYg7Np61g90leT9nfTkPwUKUArW18UTMM=',
    description: 'Home of red elephants, lions, and vast savannas.',
    groupPrice: '$700 per group',
    soloPrice: '$250 per person',
  },
  {
    name: 'Naivasha',
    image: 'https://media.istockphoto.com/id/1393961624/photo/great-white-pelican-pelicanus-onocrotatus-takes-off-from-the-blue-waters-of-lake-naivasha.jpg?s=612x612&w=0&k=20&c=hveuEMYTol3PJd4b7jnmc965dmLAftg0T6mwBEf5Jqg=',
    description: 'Home to diverse wildlife and numerous bird species,.',
    groupPrice: '$700 per group',
    soloPrice: '$250 per person',
  },
  {
    name: 'Amboseli National Park',
    image: 'https://media.istockphoto.com/id/825008436/video/whitetail-deer-fawns-and-doe.avif?s=640x640&k=20&c=gwCnNobvs4KG04F1ipglKKC7GLTaDZ53wkvJLGKBeA0=',
    description: 'The park offers exceptional opportunity to watch beautifil antelopes.',
    groupPrice: '$700 per group',
    soloPrice: '$250 per person',
  },
  {
    name: 'Kisite-Mpunguti Marine National Park',
    image: 'https://www.naturaltoursandsafaris.com/wp-content/uploads/2023/05/Kisite-Mpunguti-Marine-Park-Reserve.jpg',
    description: 'Enjoy exceptional vibrant coral reefs and diverse marine life.',
    groupPrice: '$700 per group',
    soloPrice: '$250 per person',
  },{
    name: 'Mt.Elgon National Park',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4no3XDREY6waJZuzXXK62YatA8B4Lj38-gakw6BCesIpR4O6_5QrxzvYzEptAyoc0sa7oYkGqsKoCpM-huTv6VT5um7c_DNOWVXmUA3HuXpWse_Na4Kln0HIDiXY1ZSCIgCRGfgc=s1360-w1360-h1020-rw',
    description: 'Home of unique volcanic landscape and rich cultural heritage.',
    groupPrice: '$700 per group',
    soloPrice: '$250 per person',
  },
];


const Destinations = () => {
  return (
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
    <Box sx={{ py: 10, px: 3 }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Explore Our Best Destinations fo you
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {destinations.map((d, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card
              sx={{
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                },
              }}
            >
              <CardMedia component="img" height="200" image={d.image} alt={d.name} />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {d.name}
                </Typography>
                <Typography variant="body2" sx={{ my: 1 }}>
                  {d.description}
                </Typography>
                <Typography variant="body2">
                  <strong>Group:</strong> {d.groupPrice}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  <strong>Solo:</strong> {d.soloPrice}
                </Typography>
                <Button variant="outlined" size="small" color="primary">
                  View More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </motion.div>
  );
};

export default Destinations;
