// const { width, height } = Dimensions.get("window");

export const COLORS = {
    primary: "#FFA114", //turkiz
    primarySecond: "#40209B",
    darkWhite: "#ebebd3",
    transparentPrimray: 'rgba(227, 120, 75, 0.4)',
    orange: "#FFA133",
    newBlue: "#607b7d",
    orangePrimary: "#f78764",
    darkGreen: "#ccd5ae",
    white4: "#a7cdbd",
    yellow: "#f4d35e",
    lightOrange: "#FFA133",
    lightOrange2: "#FDDED4",
    lightOrange3: '#FFD9AD',
    white3: '#a8dadc',
    green: "#00f5d4",
    red: "#FF1717",
    red2: "#ffcbf2",
    blue: '#0064C0',
    gray: "#898B9A",
    gray2: "#2F3436",
    gray3: '#CFD0D7',
    white2: "#FBFBFB",
    white: '#FFFFFF',
    black: "#000000",


};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius:18,
    padding: 24,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,
    

    //
    p10: '10%',
    p20: '20%',
    p30: '30%',
    p40: '40%',
    p50: '50%',
    p60: '60%',
    p70: '70%',
    p80: '80%',
    p90: '90%',
    p100: '100%',

    // // app dimensions
    // width,
    // height
};
export const FONTS = {
    largeTitle: { fontFamily: "Poppins-Black", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "Poppins-Bold", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Poppins-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h4, lineHeight: 22 },
    h5: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h5, lineHeight: 22 },
    body1: { fontFamily: "Poppins-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Poppins-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Poppins-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Poppins-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Poppins-Regular", fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
