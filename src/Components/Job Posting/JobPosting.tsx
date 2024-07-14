import React, { useState } from "react"
import { Grid, Typography, Checkbox, Autocomplete, IconButton, Button, FormControl, RadioGroup, Radio } from '@mui/material';
import { TextField } from '@mui/material';
import { Stack } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Slider } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from "@mui/x-date-pickers";
import { techHubCity, workMode, probationPeriod, skillset, stringToTitleCase } from '../constant/constant_values';
import AdditionalInfo from './AdditionalInfo';
import { uid } from "uid";
import dayjs from 'dayjs';
import moment from "moment";

const JobPosting = () => {
    const [formData, setFormData] = useState(
        {
            job_id: uid(),
            job_role: '',
            job_description: '',
            job_type: 'fullTime',
            // company_name: '',
            job_location: '',
            work_mode: '',
            job_offer: [6, 11],
            // company_size: '',
            // logo: '',
            // start_date: '',
            experience: 1.5,
            last_date: moment(new Date()).format('L'),
            // probation_period: '',
            skills: [],
            requirements: [{ requirements: '', unique_id: uid() }],
            key_responsibilities: [{ key_responsibilities: '', unique_id: uid() }],
            preferred_qualifications: [{ preferred_qualifications: '', unique_id: uid() }],
            // joining_date: '',
            immediate_joining: true
        }
    )
    const handleFormOnChange = (event) => {
        console.log(event.target.name, event.target.value);
        if (event.target.name === 'immediate_joining') {
            setFormData({ ...formData, [event.target.name]: event.target.checked })
        } else {
            setFormData({ ...formData, [event.target.name]: event.target.value })
        }
    }
    const handleAutoCompleteChange = (e, newValue, type) => {
        if (type === 'skills') {
            setFormData({ ...formData, [type]: newValue })
        } else {
            setFormData({ ...formData, [type]: newValue['Id'] })
        }
    }
    const updateDateFormat = (date_to_be_format) => {
        const parsedDate = moment(new Date(date_to_be_format)).format();
        const formattedDate = moment(parsedDate).format('L')
        setFormData({ ...formData, last_date: formattedDate })
    }
    return (
        <Grid container mt={12} display={'flex'} justifyContent={'center'}>
            <Grid item xs={8} p={2} borderRadius={'8px'} boxShadow={'0 4px 8px 0 rgb(255 255 255 / 20%), 0 6px 20px 0 rgb(169 169 169 / 19%)'}>
                <Stack direction={'row'} justifyContent={'space-between'} gap={2} borderBottom={'1px solid #efefef'}>
                    <Stack direction={'column'} textAlign={'left'} width={'50%'}>
                        <Typography fontSize={'18px'} fontWeight={'600'} color={'black'}>Please fill up the job role details and requirement</Typography>
                    </Stack>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} gap={2} mt={4}>
                    <Stack direction={'column'} textAlign={'left'} width={'45%'}>
                        <Typography fontSize={'14px'} fontWeight={'600'} color={'black'}>Job title</Typography>
                        <Typography fontSize={'14px'}>A job title must be describe one position only</Typography>
                    </Stack>
                    <Stack width={'55%'}>
                        <TextField variant="outlined" size="small" placeholder="e.g. Software Developer" fullWidth
                            sx={{
                                '& .MuiInputBase-input::placeholder': {
                                    fontSize: '13px',
                                },
                            }
                            }
                            name="job_role"
                            onChange={(e) => handleFormOnChange(e)}
                        />
                    </Stack>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} gap={2} mt={4}>
                    <Stack direction={'column'} textAlign={'left'} width={'45%'}>
                        <Typography fontSize={'14px'} fontWeight={'600'} color={'black'}>Job description</Typography>
                        <Typography fontSize={'14px'}>Provide a short description about the job. Keep it short and to the point.</Typography>
                    </Stack>
                    <Stack width={'55%'}>
                        <TextField variant="outlined" size="small" multiline minRows={8} maxRows={8} placeholder="e.g. Develop and maintain web applications using ReactJS" fullWidth sx={{
                            '& .MuiInputBase-input::placeholder': {
                                fontSize: '13px',
                            },
                        }
                        }
                            name="job_description"
                            onChange={(e) => handleFormOnChange(e)} />
                    </Stack>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} gap={2} mt={4}>
                    <Stack direction={'column'} textAlign={'left'} width={'45%'}>
                        <Typography fontSize={'14px'} fontWeight={'600'} color={'black'}>Employment type</Typography>
                        <Typography fontSize={'14px'}>What would be the type of employee you are hiring for.</Typography>
                    </Stack>
                    <Stack width={'55%'}>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="job_type"
                                value={formData['job_type']}
                                onChange={(e) => handleFormOnChange(e)}
                                sx={{
                                    '.css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked': {
                                        color: "black"
                                    }
                                }}
                            >
                                <FormControlLabel value="fullTime" control={<Radio />} label="Full-time" />
                                <FormControlLabel value="partTime" control={<Radio />} label="Part-time" />
                                <FormControlLabel value="freelancing" control={<Radio />} label="Freelancing" />
                                <FormControlLabel value="internship" control={<Radio />} label="Internship" />
                            </RadioGroup>
                        </FormControl>
                    </Stack>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} gap={2} mt={4}>
                    <Stack direction={'column'} textAlign={'left'} width={'45%'}>
                        <Typography fontSize={'14px'} fontWeight={'600'} color={'black'}>Work mode</Typography>
                        <Typography fontSize={'14px'}>Please specify the work mode.</Typography>
                    </Stack>
                    <Stack width={'55%'}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={workMode}
                            sx={{
                                '& .MuiInputBase-input::placeholder': {
                                    fontSize: '13px',
                                }
                            }}
                            value={stringToTitleCase(formData['work_mode'])}
                            onChange={(e, selectedValue) => handleAutoCompleteChange(e, selectedValue, 'work_mode')}
                            renderInput={(params) => <TextField {...params} placeholder="Work mode" size="small" />}
                        />
                    </Stack>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} gap={2} mt={4}>
                    <Stack direction={'column'} textAlign={'left'} width={'45%'}>
                        <Typography fontSize={'14px'} fontWeight={'600'} color={'black'}>Job location</Typography>
                        <Typography fontSize={'14px'}>Provide the city name for which you want to hire.</Typography>
                    </Stack>
                    <Stack width={'55%'}>
                        <Autocomplete
                            disabled={formData['work_mode'] === 'work_from_home'}
                            disablePortal
                            id="job_location"
                            options={techHubCity}
                            sx={{
                                '& .MuiInputBase-input::placeholder': {
                                    fontSize: '13px',
                                }
                            }}
                            value={formData['work_mode'] === 'work_from_home' ? '' : stringToTitleCase(formData['job_location'])}
                            onChange={(e, selectedValue) => handleAutoCompleteChange(e, selectedValue, 'job_location')}
                            renderInput={(params) => <TextField {...params} placeholder="Job location" size="small" />}
                        />
                    </Stack>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} gap={2} mt={4}>
                    <Stack direction={'column'} textAlign={'left'} width={'45%'}>
                        <Typography fontSize={'14px'} fontWeight={'600'} color={'black'}>Immediate joining</Typography>
                        <Typography fontSize={'14px'}>Looking for immediate joinee?</Typography>
                    </Stack>
                    <Stack width={'55%'}>
                        <FormControlLabel control={<Checkbox />} label="Immediate" name="immediate_joining" checked={formData['immediate_joining']}
                            onChange={(e) => handleFormOnChange(e)} />
                    </Stack>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} gap={2} mt={4}>
                    <Stack direction={'column'} textAlign={'left'} width={'45%'}>
                        <Typography fontSize={'14px'} fontWeight={'600'} color={'black'}>Experience(In years)</Typography>
                        <Typography fontSize={'14px'}>Minimum experience for this role would be.</Typography>
                    </Stack>
                    <Stack width={'55%'}>
                        <Slider
                            defaultValue={2}
                            valueLabelDisplay="auto"
                            shiftStep={0.5}
                            step={0.5}
                            marks
                            min={0}
                            max={10}
                            value={formData['experience']}
                            name="experience"
                            onChange={(e) => handleFormOnChange(e)}
                        />
                    </Stack>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} gap={2} mt={4}>
                    <Stack direction={'column'} textAlign={'left'} width={'45%'}>
                        <Typography fontSize={'14px'} fontWeight={'600'} color={'black'}>Package range(In lpa)</Typography>
                        <Typography fontSize={'14px'}>Mention the package range (In lpa)</Typography>
                    </Stack>
                    <Stack width={'55%'}>
                        <Slider
                            value={formData['job_offer']}
                            shiftStep={0.5}
                            step={1}
                            marks
                            min={4}
                            max={45}
                            name="job_offer"
                            onChange={(e) => handleFormOnChange(e)}
                            valueLabelDisplay="auto"
                        />
                    </Stack>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} gap={2} mt={4}>
                    <Stack direction={'column'} textAlign={'left'} width={'45%'}>
                        <Typography fontSize={'14px'} fontWeight={'600'} color={'black'}>Last date</Typography>
                        <Typography fontSize={'14px'}>Application closing date</Typography>
                    </Stack>
                    <Stack width={'55%'}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                value={dayjs(formData?.['last_date'])}
                                sx={{
                                    height: '42px !important', '.css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root': {
                                        height: '41px', fontSize: '14px'
                                    }
                                }}
                                onChange={(newValue) => updateDateFormat(newValue)}
                            />
                        </LocalizationProvider>
                    </Stack>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} gap={2} mt={4}>
                    <Stack direction={'column'} textAlign={'left'} width={'45%'}>
                        <Typography fontSize={'14px'} fontWeight={'600'} color={'black'}>Skills</Typography>
                        <Typography fontSize={'14px'}>Please select the skills for which you are hiring.</Typography>
                    </Stack>
                    <Stack width={'55%'}>
                        <Autocomplete
                            multiple
                            limitTags={4}
                            id={`multiple-limit-tags-1`}
                            options={skillset}
                            onChange={(e, newValue) => handleAutoCompleteChange(e, newValue, 'skills')}
                            size="small"
                            disableListWrap={true}
                            sx={{
                                '& .MuiInputBase-input::placeholder': {
                                    fontSize: '13px',
                                }
                            }}
                            renderInput={(params) => (
                                <TextField {...params} placeholder="Skills" size="small" />
                            )}
                        />
                    </Stack>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} gap={2} mt={4} borderBottom={'1px solid #efefef'}>
                    <Stack direction={'column'} textAlign={'left'} width={'45%'}>
                        <Typography fontSize={'16px'} fontWeight={'600'} color={'black'}>Additional information</Typography>
                    </Stack>
                </Stack>
                <AdditionalInfo formData={formData} setFormData={setFormData} />
                <Stack direction={'row'} justifyContent={'space-between'} gap={2} mt={4}>
                    <Stack direction={'column'} textAlign={'left'} width={'45%'}>
                    </Stack>
                    <Stack width={'55%'} justifyContent={'space-between'} direction={'row'}>
                        <Button variant="outlined" sx={{
                            width: '12rem', color: 'black', borderColor: 'black', ':hover': {
                                background: 'white',
                                color: 'black', borderColor: 'black'
                            }
                        }}>Reset</Button>
                        <Button variant="contained" sx={{
                            width: '14rem', marginRight: '1.8rem', color: 'white', borderColor: 'black', background: 'black', ':hover': {
                                background: 'black'
                            }
                        }}>Save</Button>
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default JobPosting