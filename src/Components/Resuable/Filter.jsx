import { Box, Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Slider } from "@mui/material"
import { useState } from "react";
import { ButtonStyle, primaryColor } from "../Theme/Palette";

export default function Filter() {
    const [age, setAge] = useState('');
    const handleChange = (event) => {
      setAge(event.target.value);
    };
    function valuetext(value) {
        return `${value}°C`;
      }
  return (
    <div className="filter-card">
        <div className="filter">
            <div className="filter-div">
                <p className="apply-filter">Apply Filter</p>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Office Type</FormLabel>
                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                        <FormControlLabel value="remote" control={<Radio />} label="Remote" />
                        <FormControlLabel value="office" control={<Radio />} label="In Office" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="filter-div">
                <p>Work Experience</p>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Work Experience</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={age}
                    label="Work Experience"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                    <em>0</em>
                    </MenuItem>
                    <MenuItem value={10}>0-2 Years</MenuItem>
                    <MenuItem value={20}>2-4 Years</MenuItem>
                    <MenuItem value={30}>4-6 Years</MenuItem>
                    <MenuItem value={30}>4+ Years</MenuItem>
                </Select>
                </FormControl>
            </div>
            <div className="filter-div">
            <p>Expected Salary</p>
            <Box sx={{ width: 300, color:"#545454" }}>
                <Slider
                    sx={{ color:primaryColor.color }}
                    aria-label="Small steps"
                    defaultValue={5}
                    getAriaValueText={valuetext}
                    step={1}
                    marks
                    min={3}
                    max={15}
                    valueLabelDisplay="auto"
                />
            </Box>
            </div>
            <Button variant="contained" fullWidth style={ButtonStyle}>Apply</Button>
        </div>
        <div className="team-notes">
            <p>These opportunities were not posted on our platform and are from the official career page of their respective companies</p>
            <p>We have filtered these jobs for you so that you get everything at one place on our platform. Share these opportunities with your friends as well to let them know
            </p>
            <p>- Team</p>
        </div>
    </div>
  )
}
