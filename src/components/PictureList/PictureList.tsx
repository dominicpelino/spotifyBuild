import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import ColterWall from '../../assets/images/images_CW.jpeg';
import JamesMcMurtry from '../../assets/images/images_JM.jpeg';
import SturgilSimpson from '../../assets/images/images_SS.jpeg';
import TylerChilders from '../../assets/images/images_TC.jpeg';
import WhiskeyMeyers from '../../assets/images/images_WM.jpeg';
import Turnpike from '../../assets/images/turnpike.jpg';

const theme = createTheme();


export const PictureList = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
      <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="white"
              gutterBottom
              pt={10}
            >
              Sample Music
            </Typography>
            <Typography variant="h5" align="center" color="white" paragraph>
              Click the media cards to sample music from various Artists and albums.
            </Typography>
          </Container>
          </Box>

        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={5} lg={6}>
                <Card sx={{ display: 'flex' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="h5">
                        Thirteen Silver Dollars
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        Colter Wall
                      </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                      <IconButton aria-label="play/pause">
                        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                      </IconButton>
                    </Box>
                  </Box>
                  <CardMedia sx={{ width: 151 }}>
                    <img src={`${ColterWall}`}/>
                  </CardMedia>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={6} md={5} lg={6}>
                <Card sx={{ display: 'flex' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="h5">
                        Choctaw Bingo
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        james McMurtry
                      </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                      <IconButton aria-label="play/pause">
                        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                      </IconButton>
                    </Box>
                  </Box>
                  <CardMedia sx={{ width: 151 }}>
                    <img src={`${JamesMcMurtry}`}/>
                  </CardMedia>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={5} lg={6}>
                <Card sx={{ display: 'flex' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="h5">
                        Some Days
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        Sturgil Simpson
                      </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                      <IconButton aria-label="play/pause">
                        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                      </IconButton>
                    </Box>
                  </Box>
                  <CardMedia sx={{ width: 151 }}>
                    <img src={`${SturgilSimpson}`}/>
                  </CardMedia>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={5} lg={6}>
                <Card sx={{ display: 'flex' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="h5">
                        Guitar Picker
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        Whiskey Meyers
                      </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                      <IconButton aria-label="play/pause">
                        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                      </IconButton>
                    </Box>
                  </Box>
                  <CardMedia sx={{ width: 151 }}>
                    <img src={`${WhiskeyMeyers}`}/>
                  </CardMedia>
                </Card>
              </Grid>
          </Grid>
        </Container>
        </ThemeProvider>

    </>
  );
};