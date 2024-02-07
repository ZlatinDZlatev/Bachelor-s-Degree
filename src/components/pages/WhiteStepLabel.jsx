import { withStyles } from '@material-ui/core/styles';
import { StepLabel } from '@material-ui/core'

const WhiteStepLabel = withStyles(() => ({
    root: {
      color: "white"

    }
  }))(StepLabel);

  export default WhiteStepLabel