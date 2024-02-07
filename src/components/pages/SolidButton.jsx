import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'

const SolidButton = withStyles(() => ({
    root: {
      color: 'black',
      borderColor:'white',
      backgroundColor:'white',
      '&:hover': {
        backgroundColor: '#386598',
      },
    },
  }))(Button);

  export default SolidButton