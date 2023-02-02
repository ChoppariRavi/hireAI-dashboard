import { useForm, Controller } from 'react-hook-form';
import { Box, Button, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';

const LoginForm = () => {
  const router = useRouter();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const onSubmit = (data) => {
    console.log(data);
    router.push('/dashboards/crypto')
  };

  return (
    <Box sx={{ px: 2 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ textAlign: 'left', mb: 2 }}>
          <Typography sx={{ fontSize: 24, fontWeight: 'bold' }}>
            Sign In
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur
            adipisicing.
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                fullWidth
                {...field}
              />
            )}
          />
        </Box>
        <Box sx={{ mb: 3 }}>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                fullWidth
                {...field}
              />
            )}
          />
        </Box>
        <Box>
          <Button variant="contained" type="submit" fullWidth>
            Sign In
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default LoginForm;
