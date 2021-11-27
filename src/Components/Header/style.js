import { makeStyles } from '@mui/styles';
import { COLORS, SIZES } from '../../constants';

const useStyles = makeStyles((theme) => ({
  header: {
    height: "18vh",
    backgroundColor: COLORS.gray2,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
  
    height: "16vh",
    maxWidth: "80%",
    borderRadius: SIZES.radius
  
  },
}));
export default useStyles;
