import { makeStyles } from '@mui/styles';
import { COLORS, SIZES } from '../../constants';

const useStyles = makeStyles((theme) => ({
    djWid: {
        display: "flex",
        flexDirection: "row",
        justifyContent:"space-evenly",
        height: "60vh",
        alignItems: "center",
        flexWrap: "wrap",
        width: window.innerWidth>650 ? "40%":"0%",
        backgroundColor: COLORS.gray,
        // transform: "rotate(30deg)"
      
      },
  img: {
  
    height: "100%",
    width: "100%",
    borderRadius: SIZES.radius
  
  },
}));
export default useStyles;
