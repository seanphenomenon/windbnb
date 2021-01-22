import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import logo from '../../logo.svg';

import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '2rem',
  },
  logo: {
    fontSize: '14px',
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    borderRadius: '50px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '1em',
      width: 435,
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    height: '15px',
    padding: '10px',
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 40,
    margin: 4,
  },
  menu: {
    width: '100vw',
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuInput: { width: '40%', margin: '10px' },
  menuButton: {
    width: '10%',
    color: 'white',
    marginTop: '10px',
    fontFamily: 'Montserrat',
  },
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top',
      })}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <TextField
        id='outlined-basic'
        label='location'
        variant='outlined'
        className={classes.menuInput}
        fullWidth={400}
      />
      <TextField
        id='outlined-basic'
        label='add guests'
        variant='outlined'
        className={classes.menuInput}
      />
      <Button
        variant='contained'
        size='large'
        color='primary'
        className={classes.menuButton}
      >
        <SearchIcon color='white' style={{ marginRight: '10px' }} />
        Search
      </Button>
      <List>
        {[
          'Helsinki, Finland',
          'Turku, Finland',
          'Vaasa, Finland',
          'Oulu, Finland',
        ].map((text, index) => (
          <ListItem button key={text}>
            <LocationOnIcon />
            <ListItemText primary={text} style={{ marginLeft: '10px' }} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <Grid
      container
      justify='space-between'
      alignItems='center'
      className={classes.container}
    >
      <Grid item>
        <IconButton>
          <img src={logo} alt='logo' />
        </IconButton>
      </Grid>
      <Grid item>
        <Paper component='form' className={classes.root} id='input'>
          <InputBase
            className={classes.input}
            placeholder='Add Location'
            inputProps={{ 'aria-label': ' search location' }}
          />
          <Divider className={classes.divider} orientation='vertical' />
          <InputBase
            className={classes.input}
            placeholder='Add Guests'
            inputProps={{ 'aria-label': 'add guests' }}
          />
          <IconButton
            type='submit'
            className={classes.iconButton}
            aria-label='search'
          ></IconButton>
          <Divider className={classes.divider} orientation='vertical' />
          <IconButton
            color='primary'
            className={classes.iconButton}
            aria-label='directions'
          >
            <SearchIcon color='primary' />
          </IconButton>
        </Paper>
      </Grid>
      <div>
        {['top'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    </Grid>
  );
}
