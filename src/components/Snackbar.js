import React, { Component } from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { hideSnackbar } from '../reduxStore/actions'
import { connect } from 'react-redux'

class SnackbarComp extends Component {
  render() {
    return (
      <div>
        <Snackbar
        anchorOrigin={{vertical: this.props.isMobile ? 'top' : 'bottom', horizontal : "center"}}
          onClose={this.props.hideSnackbar}
          open={this.props.show}
          autoHideDuration={3000}>
          <Alert elevation={6} variant="filled" severity={this.props.color}>
            {this.props.message}
          </Alert>
        </Snackbar>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  show: state.snackbar.show,
  message: state.snackbar.message,
  color: state.snackbar.color
})


export default connect(mapStateToProps, { hideSnackbar })(SnackbarComp)