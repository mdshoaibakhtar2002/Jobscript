/* eslint-disable react/prop-types */
import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, Slider, Typography, colors } from "@mui/material"
import { useState } from "react";
import { ButtonStyle, primaryColor } from "../Theme/Palette";
import React from "react";

export default function Filter({ showDrawer, setShowDrawer }) {
    const [filterData, setFilterData] = useState({
        work_mode: 'remote',
        experience: 0,
        expected_pay: 4
    })
    const handleChange = (event) => {
        let newData = { ...filterData };
        newData[event.target.name] = event.target.value;
        setFilterData(newData)
    };
    function valuetext(value) {
        return `${value}°C`;
    }
    const applyFilter = () => {
        setShowDrawer(!showDrawer)
        console.log(filterData);
    }
    return (
        <Grid container direction={'column'} padding={'16px'} width={'100%'}>
            <FormLabel id="demo-row-radio-buttons-group-label" sx={{ display: 'flex', '&.Mui-focused': { color: '#888a88' } }}>Office Type</FormLabel>
            <RadioGroup sx={{ display: 'flex', justifyContent: 'space-between' }} row aria-labelledby="demo-row-radio-buttons-group-label" name="work_mode" onChange={handleChange} value={filterData['work_mode']}>
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
            <FormControl fullWidth sx={{ marginTop: '1rem', width: "100%" }}>
                <InputLabel id="demo-select-small-label">Work Experience</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={filterData['experience']}
                    name="experience"
                    label="Work Experience"
                    onChange={handleChange}
                    display='flex'
                    width='100%'
                    sx={{
                        '& .MuiSelect-select': {
                            display: 'flex'
                        }
                    }}
                >
                    <MenuItem value={0}>0 (Fresher)</MenuItem>
                    <MenuItem value={1}>0-2 Years</MenuItem>
                    <MenuItem value={3}>2-4 Years</MenuItem>
                    <MenuItem value={5}>4-6 Years</MenuItem>
                    <MenuItem value={7}>6+ Years</MenuItem>
                </Select>
            </FormControl>
            <Box sx={{ width: '100%', color: "#545454", marginTop: '1rem' }}>
                <Typography>Expected salary (In LPA)</Typography>
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
            <Button variant="contained" fullWidth style={ButtonStyle} onClick={() => applyFilter()}>Apply</Button>
        </Grid>
    )
}
