import React from 'react';
import Desktop from './components/Desktop';
import Mobile from './components/Mobile';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


function App(props) {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#171430' }}>
      {smDown ? <Mobile smDown={smDown} /> : <Desktop />}
    </div>
  );
}

export default App;
