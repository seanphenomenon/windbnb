import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './components/ui/Theme';
import Header from './components/ui/Header';
import Main from './components/Main';
import Footer from './components/ui/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
