import { withStyles } from '@material-ui/core/styles';
import { FormLabel } from '@material-ui/core'

const WhiteMainLabel = withStyles(() => ({
    root: {
      color: "white"
    }
  }))(FormLabel);

  export default WhiteMainLabel