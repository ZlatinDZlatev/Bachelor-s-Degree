import { withStyles } from '@material-ui/core/styles';
import { FormControlLabel } from '@material-ui/core'

const WhiteLabel = withStyles(() => ({
    root: {
      color: "white"

    }
  }))(FormControlLabel);

  export default WhiteLabel