import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Input } from '../sharedComponents/Input';
import { useForm } from 'react-hook-form';

const theme = createTheme();

interface Props {
    onSubmitHandler: (data: any, event : any)=>Promise<void>
    stopHandler: () => Promise<void>
};

let playSong: HTMLAudioElement;

export const TrackForm = ({onSubmitHandler, stopHandler}: Props ) => {
    const { register, handleSubmit } = useForm({})

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            // backgroundColor: 'pink'
          }}>
          <Typography component="h1" variant="h5">
            Preview Tracks
          </Typography>

          <Box component="form" onSubmit={handleSubmit(onSubmitHandler)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Input {...register('artist')} name='artist' placeholder='Artist' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Input {...register('track')} name='track' placeholder='Track' />
              </Grid>
              
              <Grid item xs={12}>
                <Typography>
                    Input an artist and track above to hear a music sample.
                </Typography>
              </Grid>
            </Grid>

            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              Play
            </Button>

            <Button onClick={stopHandler}>
              Stop
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}