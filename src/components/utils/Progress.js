import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const styles = () => ({
  root: {
    width: '100%',
  },
}
);

class Progress extends React.Component {

  state = {
    progress : 0,
  }

  render() {
    const {classes , value} = this.props;
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
      <div className={classes.root}>
      <LinearProgress variant="determinate" value={Number(value)} />
    </div>
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
}




export default connect(null)(withStyles(styles)(Progress)) ;
