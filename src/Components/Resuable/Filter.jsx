import { Box, Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Slider, colors } from "@mui/material"
import { useState } from "react";
import { ButtonStyle, primaryColor } from "../Theme/Palette";
import { useDispatch } from 'react-redux';
import { Loading } from "../../Redux/Reducer";

export default function Filter({showDrawer, setShowDrawer}) {
    const [filterData, setFilterData] = useState({
        work_mode: 'remote',
        experience: 0,
        expected_pay: 4
    })
    const dispatch = useDispatch();
    const handleChange = (event) => {
        let newData = {...filterData};
        newData[event.target.name] = event.target.value;
        setFilterData(newData)
    };
    function valuetext(value) {
        return `${value}°C`;
    }
    const applyFilter = (e) => {
        setShowDrawer(!showDrawer)
        console.log(filterData);
        // dispatch(Loading(true))
        // setTimeout(() => {
        //     dispatch(Loading(false))
        // }, 4000);
    }
    return (
        // <div className="">
            <Box padding={'16px'}>
                <div className="">
                    <p className="apply-filter">Apply Filter</p>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label" sx={{ display: 'flex', '&.Mui-focused': { color: '#888a88' } }}>Office Type</FormLabel>
                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="work_mode" onChange={handleChange} value={filterData['work_mode']}>
                            <FormControlLabel defaultChecked={true} value="remote" control={<Radio sx={{
                                "&.Mui-checked": {
                                    color: '#888a88'
                                }
                            }} />} label="Remote" />
                            <FormControlLabel value="office" control={<Radio sx={{
                                "&.Mui-checked": {
                                    color: '#888a88'
                                }
                            }} />} label="Office" />
                            <FormControlLabel value="hybrid" control={<Radio sx={{
                                "&.Mui-checked": {
                                    color: '#888a88'
                                }
                            }} />} label="Hybrid" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="filter-div">
                    <p>Work Experience</p>
                    <FormControl size="small">
                        <InputLabel id="demo-select-small-label">Work Experience</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={filterData['experience']}
                            name="experience"
                            label="Work Experience"
                            onChange={handleChange}
                            display='flex'
                            sx={{
                                '& .MuiSelect-select': {
                                    display: 'flex'
                                }
                            }}
                        >
                            <MenuItem value={0}><em>0 (Fresher)</em></MenuItem>
                            <MenuItem value={1}>0-2 Years</MenuItem>
                            <MenuItem value={3}>2-4 Years</MenuItem>
                            <MenuItem value={5}>4-6 Years</MenuItem>
                            <MenuItem value={7}>6+ Years</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="filter-div">
                    <p>Expected Salary</p>
                    <Box sx={{ width: '100%', color: "#545454" }}>
                        <Slider
                            sx={{ color: primaryColor.color }}
                            aria-label="Small steps"
                            getAriaValueText={valuetext}
                            step={1}
                            marks
                            min={3}
                            max={15}
                            valueLabelDisplay="auto"
                            name="expected_pay"
                            value={filterData["expected_pay"]}
                            onChange={handleChange}
                        />
                    </Box>
                </div>
                <Button variant="contained" fullWidth style={ButtonStyle} onClick={(e) => applyFilter(e)}>Apply</Button>
            </Box>
            // {/* <div className="team-notes">
            //     <p>These opportunities were not posted on our platform and are from the official career page of their respective companies</p>
            //     <p>We have filtered these jobs for you so that you get everything at one place on our platform. Share these opportunities with your friends as well to let them know
            //     </p>
            //     <p>- Team</p>
            // </div> */}
        // </div>
    )
}
