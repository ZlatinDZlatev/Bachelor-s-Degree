import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'

const WhiteButton = withStyles((theme) => ({
    root: {
      color: 'white',
      borderColor:'white',
      backgroundColor: '#386598',
      '&:hover': {
        backgroundColor: '#0a61c3',
      },
    },
  }))(Button);

  export default WhiteButton