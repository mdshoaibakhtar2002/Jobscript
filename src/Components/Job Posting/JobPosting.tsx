import React from "react"
import { Grid, Typography, Checkbox, Autocomplete, IconButton, Button } from '@mui/material';
import { TextField } from '@mui/material';
import { Stack } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Slider } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from "@mui/x-date-pickers";
import { DeleteOutlineRounded } from "@mui/icons-material";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

const JobPosting = () => {
    const techHubCity = [
        { label: 'Kolkata', Id: 'kolkata' },
        { label: 'Bangalore', Id: 'bangalore' },
        { label: 'Chennai', Id: 'chennai' },
        { label: 'Hyderabad', Id: 'hyderabad' },
        { label: 'Pune', Id: 'pune' },
        { label: 'Mumbai', Id: 'mumbai' },
        { label: 'Delhi', Id: 'delhi' },
        { label: 'Gurgaon', Id: 'gurgaon' },
        { label: 'Noida', Id: 'noida' },
        { label: 'Ahmedabad', Id: 'ahmedabad' }
    ];
    const workMode = [
        { label: 'In office', Id: 'office' },
        { label: 'Work from home', Id: 'home' },
        { label: 'Hybrid', Id: 'hybrid' },
    ];
    const probationPeriod = [
        { label: '1 month', Id: '1month' },
        { label: '2 month', Id: '2month' },
        { label: '3 month', Id: '3month' },
        { label: '4 month', Id: '4month' },
        { label: '5 month', Id: '5month' },
        { label: '6 month', Id: '6month' },
        { label: '7 month', Id: '7month' },
        { label: '8 month', Id: '8month' },
        { label: '9 month', Id: '9month' },
        { label: '10 month', Id: '10month' },
        { label: '11 month', Id: '11month' },
        { label: '12 month', Id: '12month' },
    ];
    const skillset = [
        { label: 'Python', Id: 'python' },
        { label: 'Java', Id: 'java' },
        { label: 'JavaScript', Id: 'javascript' },
        { label: 'TypeScript', Id: 'typescript' },
        { label: 'Web Development', Id: 'web_development' },
        { label: 'VS Code', Id: 'vs_code' },
        { label: 'Git', Id: 'git' },
        { label: 'Jira', Id: 'jira' },
        { label: 'HTML', Id: 'html' },
        { label: 'CSS', Id: 'css' },
        { label: 'React', Id: 'react' },
        { label: 'Angular', Id: 'angular' },
        { label: 'Vue.js', Id: 'vuejs' },
        { label: 'Node.js', Id: 'nodejs' },
        { label: 'Express.js', Id: 'expressjs' },
        { label: 'Django', Id: 'django' },
        { label: 'Flask', Id: 'flask' },
        { label: 'Spring Boot', Id: 'spring_boot' },
        { label: 'Ruby on Rails', Id: 'ruby_on_rails' },
        { label: 'PHP', Id: 'php' },
        { label: 'Laravel', Id: 'laravel' },
        { label: 'SQL', Id: 'sql' },
        { label: 'MySQL', Id: 'mysql' },
        { label: 'PostgreSQL', Id: 'postgresql' },
        { label: 'MongoDB', Id: 'mongodb' },
        { label: 'Firebase', Id: 'firebase' },
        { label: 'AWS', Id: 'aws' },
        { label: 'Azure', Id: 'azure' },
        { label: 'Google Cloud', Id: 'google_cloud' },
        { label: 'Docker', Id: 'docker' },
        { label: 'Kubernetes', Id: 'kubernetes' },
        { label: 'Terraform', Id: 'terraform' },
        { label: 'Ansible', Id: 'ansible' },
        { label: 'Jenkins', Id: 'jenkins' },
        { label: 'CI/CD', Id: 'ci_cd' },
        { label: 'Agile', Id: 'agile' },
        { label: 'Scrum', Id: 'scrum' },
        { label: 'Project Management', Id: 'project_management' },
        { label: 'Linux', Id: 'linux' },
        { label: 'Unix', Id: 'unix' },
        { label: 'Shell Scripting', Id: 'shell_scripting' },
        { label: 'C', Id: 'c' },
        { label: 'C++', Id: 'cpp' },
        { label: 'C#', Id: 'csharp' },
        { label: '.NET', Id: 'dotnet' },
        { label: 'Swift', Id: 'swift' },
        { label: 'Kotlin', Id: 'kotlin' },
        { label: 'Objective-C', Id: 'objective_c' },
        { label: 'Android Development', Id: 'android_development' },
        { label: 'iOS Development', Id: 'ios_development' },
        { label: 'Machine Learning', Id: 'machine_learning' },
        { label: 'Data Science', Id: 'data_science' },
        { label: 'Artificial Intelligence', Id: 'artificial_intelligence' },
        { label: 'Deep Learning', Id: 'deep_learning' },
        { label: 'NLP', Id: 'nlp' },
        { label: 'Computer Vision', Id: 'computer_vision' },
        { label: 'Big Data', Id: 'big_data' },
        { label: 'Hadoop', Id: 'hadoop' },
        { label: 'Spark', Id: 'spark' },
        { label: 'Tableau', Id: 'tableau' },
        { label: 'Power BI', Id: 'power_bi' },
        { label: 'Excel', Id: 'excel' },
        { label: 'Business Intelligence', Id: 'business_intelligence' },
        { label: 'Data Analysis', Id: 'data_analysis' },
        { label: 'Cybersecurity', Id: 'cybersecurity' },
        { label: 'Penetration Testing', Id: 'penetration_testing' },
        { label: 'Network Security', Id: 'network_security' },
        { label: 'Cryptography', Id: 'cryptography' }
    ];

    function valuetext(value: number) {
        return `${value}°C`;
    }
    const [value, setValue] = React.useState<number[]>([12, 23]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };


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
                        <TextField variant="outlined" size="small" placeholder="e.g. Software Developer" fullWidth sx={{
                            '& .MuiInputBase-input::placeholder': {
                                fontSize: '13px',
                            },
                        }
                        } />
                    </Stack>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} gap={2} mt={4}>
                    <Stack direction={'column'} textAlign={'left'} width={'45%'}>
                        <Typography fontSize={'14px'} fontWeight={'600'} color={'black'}>Job description</Typography>
                        <Typography fontSize={'14px'}>Provide a short description about the job. Keep it short and to the point.</Typography>
                    </Stack>
                    <Stack width={'55%'}>
                        <TextField variant="outlined" size="small" multiline minRows={8} maxRows={8} placeholder="We are looking for an ..." fullWidth sx={{
                            '& .MuiInputBase-input::placeholder': {
                                fontSize: '13px',
                            },
                        }
                        } />
                    </Stack>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} gap={2} mt={4}>
                    <Stack direction={'column'} textAlign={'left'} width={'45%'}>
                        <Typography fontSize={'14px'} fontWeight={'600'} color={'black'}>Employment type</Typography>
                        <Typography fontSize={'14px'}>what would be the type of employee you are hiring for.</Typography>
                    </Stack>
                    <Stack width={'55%'}>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Full-time" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Part-time" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="On demand" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Negotiable" />
                    </Stack>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} gap={2} mt={4}>
                    <Stack direction={'column'} textAlign={'left'} width={'45%'}>
                        <Typography fontSize={'14px'} fontWeight={'600'} color={'black'}>City</Typography>
                        <Typography fontSize={'14px'}>Your preferred city.</Typography>
                    </Stack>
                    <Stack width={'55%'}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={techHubCity}
                            renderInput={(params) => <TextField {...params} placeholder="City" size="small" />}
                        />
                    </Stack>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} gap={2} mt={4}>
                    <Stack direction={'column'} textAlign={'left'} width={'45%'}>
                        <Typography fontSize={'14px'} fontWeight={'600'} color={'black'}>Work mode</Typography>
                        <Typography fontSize={'14px'}>Are you offering for hybrid mode or other.</Typography>
                    </Stack>
                    <Stack width={'55%'}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={workMode}
                            renderInput={(params) => <TextField {...params} placeholder="Work mode" size="small" />}
                        />
                    </Stack>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} gap={2} mt={4}>
                    <Stack direction={'column'} textAlign={'left'} width={'45%'}>
                        <Typography fontSize={'14px'} fontWeight={'600'} color={'black'}>Immediate joining</Typography>
                        <Typography fontSize={'14px'}>Looking for immediate joining.</Typography>
                    </Stack>
                    <Stack width={'55%'}>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Immediate" />
                    </Stack>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} gap={2} mt={4}>
                    <Stack direction={'column'} textAlign={'left'} width={'45%'}>
                        <Typography fontSize={'14px'} fontWeight={'600'} color={'black'}>Experience(In years)</Typography>
                        <Typography fontSize={'14px'}>How much experience is needed.</Typography>
                    </Stack>
                    <Stack width={'55%'}>
                        <Slider
                            aria-label="Temperature"
                            defaultValue={2}
                            getAriaValueText={valuetext}
                            valueLabelDisplay="auto"
                            shiftStep={0.5}
                            step={0.5}
                            marks
                            min={0}
                            max={10}
                        />
                    </Stack>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} gap={2} mt={4}>
                    <Stack direction={'column'} textAlign={'left'} width={'45%'}>
                        <Typography fontSize={'14px'} fontWeight={'600'} color={'black'}>Package range(In lpa)</Typography>
                        <Typography fontSize={'14px'}>Offering package</Typography>
                    </Stack>
                    <Stack width={'55%'}>
                        <Slider
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            shiftStep={0.5}
                            step={1}
                            marks
                            min={4}
                            max={45}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                        />
                    </Stack>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} gap={2} mt={4}>
                    <Stack direction={'column'} textAlign={'left'} width={'45%'}>
                        <Typography fontSize={'14px'} fontWeight={'600'} color={'black'}>Probation period</Typography>
                        <Typography fontSize={'14px'}>Probation duration</Typography>
                    </Stack>
                    <Stack width={'55%'}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={probationPeriod}
                            renderInput={(params) => <TextField {...params} placeholder="Probation period" size="small" />}
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
                            <DateField size="small" />
                        </LocalizationProvider>
                    </Stack>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} gap={2} mt={4}>
                    <Stack direction={'column'} textAlign={'left'} width={'45%'}>
                        <Typography fontSize={'14px'} fontWeight={'600'} color={'black'}>Skills</Typography>
                        <Typography fontSize={'14px'}>List of skills whihc is required for the job role.</Typography>
                    </Stack>
                    <Stack width={'55%'}>
                        <Autocomplete
                            multiple
                            id="size-small-outlined-multi"
                            size="small"
                            options={skillset}
                            getOptionLabel={(option) => option.label}
                            renderInput={(params) => (
                                <TextField {...params} placeholder="Skills" />
                            )}
                        />
                    </Stack>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} gap={2} mt={4} borderBottom={'1px solid #efefef'}>
                    <Stack direction={'column'} textAlign={'left'} width={'45%'}>
                        <Typography fontSize={'16px'} fontWeight={'600'} color={'black'}>Additional information</Typography>
                    </Stack>
                </Stack>

                <Stack direction={'row'} justifyContent={'space-between'} gap={2} mt={4}>
                    <Stack direction={'column'} textAlign={'left'} width={'45%'}>
                        <Typography fontSize={'14px'} fontWeight={'600'} color={'black'}>Key Responsibilities</Typography>
                        <Typography fontSize={'14px'}>Provide the key responsibilities for this role</Typography>
                    </Stack>
                    <Stack width={'55%'} justifyContent={'space-between'} direction={'column'}>
                        <Stack width={'100%'} justifyContent={'space-between'} direction={'row'}>
                            <TextField variant="outlined" size="small" placeholder="Key responsibilities" fullWidth sx={{ '& .MuiInputBase-input::placeholder': { fontSize: '13px' } }} />
                            <IconButton sx={{ padding: '0px 0px 0px 4px' }}>
                                <CloseRoundedIcon />
                            </IconButton>
                        </Stack>
                        <Stack sx={{
                            cursor: 'pointer'
                        }} width={'94.4%'} mt={2} justifyContent={'center'} direction={'row'} border={'2px dotted #c4c4c4'} borderRadius={'4px'} height={'2.2rem'}>
                            <IconButton sx={{ padding: '0px 0px 0px 4px' }}>
                                <AddRoundedIcon />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Stack>

                <Stack direction={'row'} justifyContent={'space-between'} gap={2} mt={4}>
                    <Stack direction={'column'} textAlign={'left'} width={'45%'}>
                        <Typography fontSize={'14px'} fontWeight={'600'} color={'black'}>Requirements</Typography>
                        <Typography fontSize={'14px'}>Specify the requirement for this position</Typography>
                    </Stack>
                    <Stack width={'55%'} justifyContent={'space-between'} direction={'column'}>
                        <Stack width={'100%'} justifyContent={'space-between'} direction={'row'}>
                            <TextField variant="outlined" size="small" placeholder="Requirements" fullWidth sx={{ '& .MuiInputBase-input::placeholder': { fontSize: '13px' } }} />
                            <IconButton sx={{ padding: '0px 0px 0px 4px' }}>
                                <CloseRoundedIcon />
                            </IconButton>
                        </Stack>
                        <Stack sx={{
                            cursor: 'pointer'
                        }} width={'94.4%'} mt={2} justifyContent={'center'} direction={'row'} border={'2px dotted #c4c4c4'} borderRadius={'4px'} height={'2.2rem'}>
                            <IconButton sx={{ padding: '0px 0px 0px 4px' }}>
                                <AddRoundedIcon />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Stack>

                <Stack direction={'row'} justifyContent={'space-between'} gap={2} mt={4}>
                    <Stack direction={'column'} textAlign={'left'} width={'45%'}>
                        <Typography fontSize={'14px'} fontWeight={'600'} color={'black'}>Preferred qualifications</Typography>
                        <Typography fontSize={'14px'}>What would be the preferred qualifications for this job role.</Typography>
                    </Stack>
                    <Stack width={'55%'} justifyContent={'space-between'} direction={'column'}>
                        <Stack width={'100%'} justifyContent={'space-between'} direction={'row'}>
                            <TextField variant="outlined" size="small" placeholder="Preferred qualifications" fullWidth sx={{ '& .MuiInputBase-input::placeholder': { fontSize: '13px' } }} />
                            <IconButton sx={{ padding: '0px 0px 0px 4px' }}>
                                <CloseRoundedIcon />
                            </IconButton>
                        </Stack>
                        <Stack sx={{
                            cursor: 'pointer'
                        }} width={'94.4%'} mt={2} justifyContent={'center'} direction={'row'} border={'2px dotted #c4c4c4'} borderRadius={'4px'} height={'2.2rem'}>
                            <IconButton sx={{ padding: '0px 0px 0px 4px' }}>
                                <AddRoundedIcon />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} gap={2} mt={4}>
                    <Stack direction={'column'} textAlign={'left'} width={'45%'}>
                    </Stack>
                    <Stack width={'55%'} justifyContent={'space-between'} direction={'row'}>
                        <Button variant="outlined" sx={{width:'12rem', color:'black', borderColor:'black', ':hover':{
                            background:'white',
                            color:'black', borderColor:'black'
                        }}}>Cancel</Button>
                        <Button variant="contained" sx={{width:'14rem', marginRight:'1.8rem', color:'white', borderColor:'black', background:'black', ':hover':{
                            background:'black'
                        }}}>Save</Button>
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default JobPosting