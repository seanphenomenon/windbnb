import { createMuiTheme } from '@material-ui/core/styles';

const bnbRed = '#ff6b6b';

export default createMuiTheme({
  palette: {
    common: {
      red: `${bnbRed}`,
    },
    primary: {
      main: `${bnbRed}`,
    },
    typography: {
      h4: {
        fontFamily: 'Montserrat',
        fontSize: '1.75rem',
        color: '#000',
        fontWeight: 700,
      },
      h5: {
        fontFamily: 'Montserrat',
        fontSize: '24px',
        fontWeight: '700',
        color: '#333333',
      },
      body1: {
        fontFamily: 'Montserrat',
        fontSize: '16px',
        lineHeight: '20px',
        color: '#333333',
        fontWeight: 600,
      },
      subtitle1: {
        fontFamily: 'Montserrat',
        fontSize: '10px',
        fontWeight: 300,
        color: 'lightgray',
      },
    },
  },
});
