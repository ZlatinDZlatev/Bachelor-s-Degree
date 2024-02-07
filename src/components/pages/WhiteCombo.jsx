import { withStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';

const WhiteCombo = withStyles(() => ({
    input: {
      color: "white"

    },
    root:{
      popupIcon:{
        color:"white"
      }
    }
    
  }))(Autocomplete);

  export default WhiteCombo