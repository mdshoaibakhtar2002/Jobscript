/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import CircularProgress, {
  circularProgressClasses
} from "@mui/material/CircularProgress";

const CircularLoader = ({ size = 60, thickness = 8 }) => (
  <Box position="relative" top="50%" left="50%">
    <CircularProgress
      variant="indeterminate"
      disableShrink
      sx={{
        color: "rgb(255, 87, 88)",
        animationDuration: "1000ms",
        position: "absolute",
        left: 0,
        [`& .${circularProgressClasses.circle}`]: {
          strokeLinecap: "round",
        },
      }}
      size={size}
      thickness={thickness}
    />
  </Box>
)

export default CircularLoader;