import { makeStyles } from '@mui/styles';
import { COLORS, SIZES } from '../../constants';

const useStyles = makeStyles(() => ({
  keyboard: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-evenly",
    height: "60vh",
    alignItems: "center",
    flexWrap: "wrap",
    width: window.innerWidth>650 ? "60%":"100%",
    backgroundColor: COLORS.gray2,
    // transform: "rotate(30deg)"
  },
  KeyboardButton: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius
  },
}));
export default useStyles;
