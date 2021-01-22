import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { StepConnector } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '2em',
  },
  rule: {
    width: '100%',
    marginBottom: '1em',
    color: 'lightgrey',
  },
  footerText: {
    fontFamily: 'Montserrat',
    fontSize: '14px',
    color: 'lightgrey',
    fontWeight: 600,
  },
}));

export default function Footer() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid
      container
      justify='center'
      alignItems='center'
      className={classes.container}
    >
      <Grid item>
        <StepConnector orientation='horizontal' className={classes.rule} />
        <Typography className={classes.footerText}>
          Sean Harrell @ DevChallenges.io
        </Typography>
      </Grid>
    </Grid>
  );
}
