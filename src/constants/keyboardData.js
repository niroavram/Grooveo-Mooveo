import { audio, COLORS } from ".";
import {
  GiGuitar,
  GiDrum,
  GiGuitarBassHead,
  GiOilDrum,
  GiDrumKit,
  GiCampCookingPot,
  GiPianoKeys,
} from "react-icons/gi";
import { FaDrum } from "react-icons/fa";
import { RiSpaceShipFill } from "react-icons/ri";

const soundsGroup = 
  {
    future_funk_beats: {
      id: 0,
      isPlaying: false,
      audio: audio.future_funk_beats,
      icon: <GiDrum size="50%" />,
      BackgroundClickedColor: COLORS.primary,
      BackgroundUnClickedColor: COLORS.gray,
    },
    stutter_breakbeats: {
      id: 1,
      isPlaying: false,
      audio: audio.stutter_breakbeats,
      icon: <GiOilDrum size="50%" />,
      BackgroundClickedColor: COLORS.primary,
      BackgroundUnClickedColor: COLORS.gray,
    },
    bass_warwick: {
      id: 2,
      isPlaying: false,
      audio: audio.bass_warwick,
      icon: <GiGuitarBassHead size="50%" />,
      BackgroundClickedColor: COLORS.primary,
      BackgroundUnClickedColor: COLORS.gray,
    },
    electric_guitar: {
      id: 3,
      isPlaying: false,
      audio: audio.electric_guitar,
      icon: <GiGuitar size="50%" />,
      BackgroundClickedColor: COLORS.primary,
      BackgroundUnClickedColor: COLORS.gray,
    },
    StompySlosh: {
      id: 4,
      isPlaying: false,
      audio: audio.StompySlosh,
      icon: <GiDrumKit size="50%" />,
      BackgroundClickedColor: COLORS.primary,
      BackgroundUnClickedColor: COLORS.gray,
    },
    GrooveB_120bpm_Tanggu: {
      id: 5,
      isPlaying: false,
      audio: audio.GrooveB_120bpm_Tanggu,
      icon: <GiCampCookingPot size="50%" />,
      BackgroundClickedColor: COLORS.primary,
      BackgroundUnClickedColor: COLORS.gray,
    },
    MazePolitics_120_Perc: {
      id: 6,
      isPlaying: false,
      audio: audio.MazePolitics_120_Perc,
      icon: <RiSpaceShipFill size="50%" />,
      BackgroundClickedColor: COLORS.primary,
      BackgroundUnClickedColor: COLORS.gray,
    },
    PAS3GROOVE1: {
      id: 7,
      isPlaying: false,
      audio: audio.PAS3GROOVE1,
      icon: <FaDrum size="50%" />,
      BackgroundClickedColor: COLORS.primary,
      BackgroundUnClickedColor: COLORS.gray,
    },
    SilentStar_120_Em_OrganSynth: {
      id: 8,
      isPlaying: false,
      audio: audio.SilentStar_120_Em_OrganSynth,
      icon: <GiPianoKeys size="50%" />,
      BackgroundClickedColor: COLORS.primary,
      BackgroundUnClickedColor: COLORS.gray,
    },
       
  }
  


export default soundsGroup;
