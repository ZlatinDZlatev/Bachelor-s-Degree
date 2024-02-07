import { Checkbox } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const WhiteCheckbox = withStyles({
    root: {
      color: "white",
      '&$checked': {
        color: "61a0e7",
      },
    },
    checked: {},
  })((props) => <Checkbox color="primary" {...props} />);

  export default WhiteCheckbox