import { Container, Box, Typography } from '@mui/material';

export const Home: React.FC = () => (
  <Container maxWidth="sm">
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Create React App example
      </Typography>
    </Box>
  </Container>
);
