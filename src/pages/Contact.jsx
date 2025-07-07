import { motion } from 'framer-motion';
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  Stack,
  Divider,
  Link,
} from '@mui/material';
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';

const Contact = () => {
  return (
     <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      
      
    >
    <Box sx={{ py: 10, px: 3 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
          Contact Us
        </Typography>

        <Grid container spacing={6} sx={{ mt: 4 }}>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Send us a Message
            </Typography>
            <Stack spacing={2}>
              <TextField label="Full Name" fullWidth required />
              <TextField label="Email" fullWidth required />
              <TextField label="Subject" fullWidth />
              <TextField label="Message" multiline rows={4} fullWidth />
              <Button variant="contained" sx={{ bgcolor: '#7C00FE' }}>
                Send Message
              </Button>
            </Stack>
          </Grid>

          
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Our Contact Details
            </Typography>
            <Typography>Email: info@zaphtours.co.ke</Typography>
            <Typography>Phone: +254 794 603 876</Typography>
            <Typography>Address: Kiharu, Murang'a, Kenya</Typography>
            <Typography sx={{ mt: 2 }}>
              <strong>Office Hours:</strong> <br />
              Mon - Fri: 8:00 AM - 6:00 PM <br />
              Sat: 9:00 AM - 4:00 PM <br />
              Sun: Closed
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" gutterBottom>
              Connect With Us
            </Typography>
            <Stack direction="row" spacing={2}>
              <Link href="#" target="_blank" color="inherit">
                <Facebook />
              </Link>
              <Link href="#" target="_blank" color="inherit">
                <Instagram />
              </Link>
              <Link href="#" target="_blank" color="inherit">
                <WhatsApp />
              </Link>
            </Stack>

          
            <Box sx={{ mt: 4 }}>
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.028459477404!2d37.1559977!3d-0.7156283000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f49001f33c2fb%3A0xf18cf63c33fd7f40!2sMurang&#39;a%20town!5e0!3m2!1sen!2ske!4v1751372380518!5m2!1sen!2ske"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Box>
            
          </Grid>
        </Grid>
      </Container>
    </Box>
       </motion.div>
  );
};

export default Contact;
