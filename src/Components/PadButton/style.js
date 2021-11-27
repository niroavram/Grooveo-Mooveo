import { makeStyles } from '@mui/styles';
import { COLORS, SIZES } from '../../constants';

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: COLORS.gray3,
    borderWidth: 0.5,
    borderRadius: SIZES.radius,
    borderColor: "#9bf6ff",
    display: "flex",
    paddingLeft: 20,
    flexWrap: 'wrap',
    width: '99vw'
  },
  KeyboardButton: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white2,
    borderRadius: SIZES.radius,
    height: window.innerHeight*0.15,
    width: window.innerHeight*0.15,
    flex: "1 0 26%" 
  },
  ClickedKeyboardButton: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.orange,
    borderRadius: SIZES.radius,
    height: window.innerHeight*0.15,
    width: window.innerHeight*0.15,
    flex: "1 0 26%"   
  },
}));
export default useStyles;
