import { withStyles } from '@material-ui/core/styles';
import { Slider } from '@material-ui/core'

const CustSlider = withStyles(() => ({
    markLabel: {
          color: "white"
    },
    root:{
        width: "75%"
    }
  }))(Slider);

  export default CustSlider