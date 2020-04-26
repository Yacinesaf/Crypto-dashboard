import React from 'react';
import { Paper, Table, TableBody } from '@material-ui/core';
import emptystate from '../assets/emptystate.svg'

function AnalyzingField(props) {

  return (
    <div>
      <Paper style={{ backgroundColor: '#24204b', borderRadius: 20 }}>
        <Table>
          <TableBody>
                        {/*<img src={emptystate} alt='empty' height='200px' width='200px' />*/}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

export default AnalyzingField;