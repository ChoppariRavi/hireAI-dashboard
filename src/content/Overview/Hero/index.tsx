import { Container, Grid } from '@mui/material';
import LoginForm from './LoginForm';

function Hero() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={10} lg={8} mx="auto">
          <Grid container spacing={3}>
            <Grid item md={6}>
              <img
                alt="500"
                width={'100%'}
                src="/static/images/Overview/undraw_remotely_2j6y.svg"
              />
            </Grid>
            <Grid item md={6}>
              <LoginForm />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
