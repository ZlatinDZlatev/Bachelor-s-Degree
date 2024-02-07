import { withStyles } from '@material-ui/core/styles';
import { Radio } from '@material-ui/core'

const BWRadio = withStyles(() => ({
    root: {
      color: "#61a0e7",
      '&$checked': {
        color: "blue"
      },
      checked: {
        color: "blue"
      },

    }
  }))((props) => <Radio color="default" {...props} />);

  export default BWRadio