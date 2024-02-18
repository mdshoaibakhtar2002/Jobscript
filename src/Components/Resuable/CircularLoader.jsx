/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import CircularProgress, {
  circularProgressClasses
} from "@mui/material/CircularProgress";

const CircularLoader = ({ size = 60, thickness = 8 }) => (
  // <Box position="relative" top="50%" left="50%">
  //   <CircularProgress
  //     variant="indeterminate"
  //     disableShrink
  //     sx={{
  //       color: "rgb(255, 87, 88)",
  //       animationDuration: "1000ms",
  //       position: "absolute",
  //       left: 0,
  //       [`& .${circularProgressClasses.circle}`]: {
  //         strokeLinecap: "round",
  //       },
  //     }}
  //     size={size}
  //     thickness={thickness}
  //   />
  // </Box>
  <Box sx={{width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center', position:'absolute',zIndex:'999'}}>
  <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  </Box>
)

export default CircularLoader;