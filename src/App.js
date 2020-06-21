import React from 'react';
import Desktop from './components/Desktop';
import Mobile from './components/Mobile';

function App(props) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#171430' }}>
      <Desktop />
      {/*<Mobile />*/}
    </div>
  );
}

export default App;
