import { makeStyles } from '@mui/styles';
import { COLORS, SIZES } from '../../constants';

const useStyles = makeStyles((theme) => ({
    controller:{
        backgroundColor: COLORS.gray2,
        radius: SIZES.radius,
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        height: "30%"
    },

    unClicked: {
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.gray3,
        borderRadius: SIZES.radius,
        height: window.innerHeight*0.11,
        width: window.innerHeight*0.11,
        flex: "1 0 26%"  
    },
  clicked: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primarySecond,
    borderRadius: SIZES.radius,
    height: window.innerHeight*0.11,
    width: window.innerHeight*0.11,
    flex: "1 0 26%"  
  
  },
}));
export default useStyles;
