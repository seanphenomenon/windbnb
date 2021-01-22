import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import StarIcon from '@material-ui/icons/Star';

import rooms from './ui/assets/rooms';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    padding: '2rem',
    display: 'flex',
    flexWrap: 'wrap',
  },
  containerTitle: {
    ...theme.palette.typography.h5,
    [theme.breakpoints.down('md')]: {
      fontSize: '18px',
    },
  },
  card: {
    width: '100%',
  },
  cardText: {
    ...theme.palette.typography.body1,
  },
  button: {
    fontFamily: 'Montserrat',
    borderColor: '#000',
    color: '4F4F4F',
    width: '70px',
    borderRadius: 50,
    fontSize: '8px',
    lineHeight: '15px',
    fontWeight: 'bold',
    marginRight: 5,
    padding: 2,
  },
  star: {
    verticalAlign: 'top',
    fontSize: '15px',
    color: '#ff6b6b',
    marginRight: '2px',
    marginTop: '1px',
  },
  rating: {
    fontFamily: 'Montserrat',
    color: '#4F4F4F',
    fontSize: '12px',
  },
}));

export default function Main() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div className={classes.root}>
      <Grid
        container
        justify='center'
        alignItems='center'
        className={classes.container}
        style={{ border: '2px solid red' }}
        spacing={4}
      >
        <Grid
          item
          container
          justify='space-between'
          alignItems='center'
          className={classes.container}
        >
          <Grid item>
            <Typography className={classes.containerTitle}>
              Stays in Finland
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.rating}>12+ Stays</Typography>
          </Grid>
        </Grid>

        {/* --- CARD ---- */}
        <Grid item lg={4} md={12}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component='img'
                className={classes.media}
                image='/images/1.jpg'
                title='room'
                height='200'
              />
              <CardContent>
                <Grid
                  item
                  container
                  direction='row'
                  justify='space-evenly'
                  spacing={2}
                >
                  <Grid
                    item
                    container
                    direction='row'
                    justify='space-evenly'
                    style={{ padding: '5px' }}
                  >
                    <Grid item xs={10} style={{ display: 'flex' }}>
                      <Button variant='outlined' className={classes.button}>
                        SUPER HOST
                      </Button>
                      <Typography
                        variant='caption'
                        color='textSecondary'
                        style={{ marginTop: '2px', marginLeft: '2px' }}
                      >
                        Entire apartment .2 beds
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                      }}
                    >
                      <StarIcon className={classes.star} />
                      <Typography className={classes.rating}> 4.42</Typography>
                    </Grid>
                  </Grid>
                  <Grid item container direction='row'>
                    <Typography className={classes.cardText}>
                      Stylish apartment in center of the city
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* --- CARD ---- */}
        <Grid item lg={4} md={12}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component='img'
                className={classes.media}
                image='/images/2.jpg'
                title='room'
                height='200'
              />
              <CardContent>
                <Grid
                  item
                  container
                  direction='row'
                  justify='space-evenly'
                  spacing={2}
                >
                  <Grid
                    item
                    container
                    direction='row'
                    justify='space-evenly'
                    style={{ padding: '5px' }}
                  >
                    <Grid item xs={10} style={{ display: 'flex' }}>
                      <Typography
                        variant='caption'
                        color='textSecondary'
                        component='p'
                      >
                        Private room
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                      }}
                    >
                      <StarIcon className={classes.star} />
                      <Typography className={classes.rating}> 4.25</Typography>
                    </Grid>
                  </Grid>
                  <Grid item container direction='row'>
                    <Typography className={classes.cardText}>
                      Cozy, peaceful and private room with...
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* --- CARD ---- */}
        <Grid item lg={4} md={12}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component='img'
                className={classes.media}
                image='/images/8.jpg'
                title='room'
                height='200'
              />
              <CardContent>
                <Grid
                  item
                  container
                  direction='row'
                  justify='space-evenly'
                  spacing={2}
                >
                  <Grid
                    item
                    container
                    direction='row'
                    justify='space-evenly'
                    style={{ padding: '5px' }}
                  >
                    <Grid item xs={10} style={{ display: 'flex' }}>
                      <Typography
                        variant='caption'
                        color='textSecondary'
                        component='p'
                      >
                        Entire house
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                      }}
                    >
                      <StarIcon className={classes.star} />
                      <Typography className={classes.rating}>4.96</Typography>
                    </Grid>
                  </Grid>
                  <Grid item container direction='row'>
                    <Typography className={classes.cardText}>
                      Modern House in a remote area
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* --- CARD ---- */}
        <Grid item lg={4} md={12}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component='img'
                className={classes.media}
                image='/images/6.jpg'
                title='room'
                height='200'
              />
              <CardContent>
                <Grid
                  item
                  container
                  direction='row'
                  justify='space-evenly'
                  spacing={2}
                >
                  <Grid
                    item
                    container
                    direction='row'
                    justify='space-evenly'
                    style={{ padding: '5px' }}
                  >
                    <Grid item xs={10} style={{ display: 'flex' }}>
                      <Button variant='outlined' className={classes.button}>
                        SUPER HOST
                      </Button>
                      <Typography
                        variant='caption'
                        color='textSecondary'
                        style={{ marginTop: '2px', marginLeft: '2px' }}
                      >
                        Entire apartment .2 beds
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                      }}
                    >
                      <StarIcon className={classes.star} />
                      <Typography className={classes.rating}> 4.85</Typography>
                    </Grid>
                  </Grid>
                  <Grid item container direction='row'>
                    <Typography className={classes.cardText}>
                      Stylist room in design district
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* --- CARD ---- */}
        <Grid item lg={4} md={12}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component='img'
                className={classes.media}
                image='/images/5.jpg'
                title='room'
                height='200'
              />
              <CardContent>
                <Grid
                  item
                  container
                  direction='row'
                  justify='space-evenly'
                  spacing={2}
                >
                  <Grid
                    item
                    container
                    direction='row'
                    justify='space-evenly'
                    style={{ padding: '5px' }}
                  >
                    <Grid item xs={10} style={{ display: 'flex' }}>
                      <Typography
                        variant='caption'
                        color='textSecondary'
                        component='p'
                      >
                        Private room
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                      }}
                    >
                      <StarIcon className={classes.star} />
                      <Typography className={classes.rating}>4.54</Typography>
                    </Grid>
                  </Grid>
                  <Grid item container direction='row'>
                    <Typography className={classes.cardText}>
                      Modern apartment close to nature
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* --- CARD ---- */}
        <Grid item lg={4} md={12}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component='img'
                className={classes.media}
                image='/images/7.jpg'
                title='room'
                height='200'
              />
              <CardContent>
                <Grid
                  item
                  container
                  direction='row'
                  justify='space-evenly'
                  spacing={2}
                >
                  <Grid
                    item
                    container
                    direction='row'
                    justify='space-evenly'
                    style={{ padding: '5px' }}
                  >
                    <Grid item xs={10} style={{ display: 'flex' }}>
                      <Typography
                        variant='caption'
                        color='textSecondary'
                        component='p'
                      >
                        Entire house
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                      }}
                    >
                      <StarIcon className={classes.star} />
                      <Typography className={classes.rating}>4.64</Typography>
                    </Grid>
                  </Grid>
                  <Grid item container direction='row'>
                    <Typography className={classes.cardText}>
                      House in a remote area
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
