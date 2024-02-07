import { TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const NewTextField = withStyles({
    root: {
    
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: '#386598',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white',
        },
      },
    },
  })(TextField);

  export default NewTextField