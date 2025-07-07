// import { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
// import { Box, Button, TextField, Typography, Alert } from '@mui/material';

// const Newsletter = () => {
//   const form = useRef();
//   const [status, setStatus] = useState("");

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       'service_94603876',       
//       'template_vkhaepd',     
//       form.current,
//       'GHrxsqtC5wHEMA1Em'       
//     )
//     .then(() => {
//       setStatus("success");
//       form.current.reset();
//     }, () => {
//       setStatus("error");
//     });
//   };

//   return (
//     <Box sx={{ p: 5, bgcolor: '#F2F2F2', textAlign: 'center' }}>
//       <Typography variant="h5" gutterBottom>
//         Subscribe to Our Newsletter
//       </Typography>
//       <Typography variant="body1" mb={3}>
//         Get weekly updates on safaris and travel tips
//       </Typography>

//       <form ref={form} onSubmit={sendEmail}>
//         <TextField
//           name="user_email"
//           type="email"
//           placeholder="Enter your email"
//           required
//           sx={{ width: '300px', mr: 2 }}
//         />
//         <Button type="submit" variant="contained" color="primary">
//           Subscribe
//         </Button>
//       </form>

//       {status === "success" && <Alert severity="success" sx={{ mt: 3 }}>Thanks for subscribing!</Alert>}
//       {status === "error" && <Alert severity="error" sx={{ mt: 3 }}>Something went wrong. Try again.</Alert>}
//     </Box>
//   );
// };

// export default Newsletter;
