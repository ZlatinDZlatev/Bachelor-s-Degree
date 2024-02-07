import { withStyles } from '@material-ui/core/styles';
import { Stepper } from '@material-ui/core'

const CustStepper = withStyles(() => ({
    root: {
      backgroundColor: "transparent"
    }
  }))(Stepper);

  export default CustStepper