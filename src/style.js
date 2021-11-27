import { makeStyles } from '@mui/styles';
import { COLORS } from './constants';

const useStyles = makeStyles((theme) => ({
    mainWidget: {
      display:'flex',
        flexDirection: "row"
      
      },
  main: {
 backgroundColor: COLORS.gray2,
 height: "100%",
 minHeight: "100vh"
  },
}));
export default useStyles;
