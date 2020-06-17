import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function MobileTabs({ tabValue, tabSwitch }) {

  return (
    <Paper square style={{ position: 'fixed', bottom: 0, width: '100%' }}>
      <Tabs
        variant="fullWidth"
        value={tabValue}
        indicatorColor="primary"
        textColor="primary"
        onChange={tabSwitch}
        aria-label="disabled tabs example"
      >
        <Tab label="Wallet" />
        <Tab label="Analysis" />
        <Tab label="Chart" />
      </Tabs>
    </Paper>
  );
}

export default MobileTabs;