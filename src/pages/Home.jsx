import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Newsletter from '../components/Newsletter';

<Newsletter />


const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
    <Box sx={{ py: 10, textAlign: 'center' }}>
      <Typography variant="h3" fontWeight="bold">
        Welcome to Zaph Tours!
      </Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>
        Explore the best safaris and adventures in Kenya.
      </Typography>
    </Box>
     </motion.div>
  );
};

export default Home;
