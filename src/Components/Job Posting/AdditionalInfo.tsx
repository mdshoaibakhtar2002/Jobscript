import React, { useState } from "react"
import { Stack, Typography, TextField, IconButton } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { uid } from 'uid';

const AdditionalInfo = ({ formData, setFormData }) => {
    const removeField = (index, type) => {
        setFormData(prevFormData => {
            let newData = [...prevFormData[type]];
            newData.splice(index, 1);
            if(type === 'key_responsibilities'){
                return { ...prevFormData, key_responsibilities: newData };
            }
            else if(type === 'requirements'){
                return { ...prevFormData, requirements: newData };
            }
            else if(type === 'preferred_qualifications'){
                return { ...prevFormData, preferred_qualifications: newData };
            }
        });
    };

    const addNewField = (type) => {
        setFormData(prevFormData => {
            let newData = [...prevFormData[type]];
            if(type === 'key_responsibilities'){
                newData.push({ key_responsibilities: '', unique_id: uid() });
                return { ...prevFormData, key_responsibilities: newData };
            }
            else if(type === 'requirements'){
                newData.push({ requirements: '', unique_id: uid() });
                return { ...prevFormData, requirements: newData };
            }
            else if(type === 'preferred_qualifications'){
                newData.push({ preferred_qualifications: '', unique_id: uid() });
                return { ...prevFormData, preferred_qualifications: newData };
            }
        });
    };

    const handleChange = (e, index, type) => {
        const { name, value } = e.target;
        setFormData(prevFormData => {
            let newData = [...prevFormData[type]];
            newData[index][name] = value;
            if(type === 'key_responsibilities'){
                return { ...prevFormData, key_responsibilities: newData };
            }
            else if(type === 'requirements'){
                return { ...prevFormData, requirements: newData };
            }
            else if(type === 'preferred_qualifications'){
                return { ...prevFormData, preferred_qualifications: newData };
            }
        });
    };

    return (
        <>
            <Stack direction={'row'} justifyContent={'space-between'} gap={2} mt={4}>
                <Stack direction={'column'} textAlign={'left'} width={'45%'}>
                    <Typography fontSize={'14px'} fontWeight={'600'} color={'black'}>Key Responsibilities</Typography>
                    <Typography fontSize={'14px'}>Provide the key responsibilities for this role</Typography>
                </Stack>
                <Stack width={'55%'} justifyContent={'space-between'} direction={'column'} key={formData['key_responsibilities'].length}>
                    {formData?.['key_responsibilities'] && formData?.['key_responsibilities'].length > 0 && formData?.['key_responsibilities'].map((element, index) => (
                        <Stack width="100%" justifyContent="space-between" direction="row" key={index} mt={2}>
                            <TextField
                                variant="outlined"
                                size="small"
                                placeholder="Key responsibilities"
                                fullWidth
                                sx={{ '& .MuiInputBase-input::placeholder': { fontSize: '13px' } }}
                                name="key_responsibilities"
                                value={element.key_responsibilities}
                                onChange={(e) => handleChange(e, index, 'key_responsibilities')}
                            />
                            <IconButton
                                sx={{ padding: '0px 0px 0px 4px' }}
                                disabled={formData['key_responsibilities'].length <= 1}
                                onClick={() => removeField(index, 'key_responsibilities')}
                            >
                                <CloseRoundedIcon />
                            </IconButton>
                        </Stack>
                    ))}

                    <Stack sx={{ cursor: 'pointer' }} width={'94.4%'} mt={2} justifyContent={'center'} direction={'row'} border={'2px dotted #c4c4c4'} borderRadius={'4px'} height={'2.2rem'}>
                        <IconButton sx={{ padding: '0px 0px 0px 4px' }} onClick={() => addNewField('key_responsibilities')}>
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
                <Stack width={'55%'} justifyContent={'space-between'} direction={'column'} key={formData['requirements'].length}>
                    {formData?.['requirements'] && formData?.['requirements'].length > 0 && formData?.['requirements'].map((element, index) => (
                        <Stack width="100%" justifyContent="space-between" direction="row" key={index} mt={2}>
                            <TextField
                                variant="outlined"
                                size="small"
                                placeholder="Key responsibilities"
                                fullWidth
                                sx={{ '& .MuiInputBase-input::placeholder': { fontSize: '13px' } }}
                                name="requirements"
                                value={element.requirements}
                                onChange={(e) => handleChange(e, index, 'requirements')}
                            />
                            <IconButton
                                sx={{ padding: '0px 0px 0px 4px' }}
                                disabled={formData['requirements'].length <= 1}
                                onClick={() => removeField(index, 'requirements')}
                            >
                                <CloseRoundedIcon />
                            </IconButton>
                        </Stack>
                    ))}

                    <Stack sx={{ cursor: 'pointer' }} width={'94.4%'} mt={2} justifyContent={'center'} direction={'row'} border={'2px dotted #c4c4c4'} borderRadius={'4px'} height={'2.2rem'}>
                        <IconButton sx={{ padding: '0px 0px 0px 4px' }} onClick={() => addNewField('requirements')}>
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
                <Stack width={'55%'} justifyContent={'space-between'} direction={'column'} key={formData['preferred_qualifications'].length}>
                    {formData?.['preferred_qualifications'] && formData?.['preferred_qualifications'].length > 0 && formData?.['preferred_qualifications'].map((element, index) => (
                        <Stack width="100%" justifyContent="space-between" direction="row" key={index} mt={2}>
                            <TextField
                                variant="outlined"
                                size="small"
                                placeholder="Key responsibilities"
                                fullWidth
                                sx={{ '& .MuiInputBase-input::placeholder': { fontSize: '13px' } }}
                                name="preferred_qualifications"
                                value={element.preferred_qualifications}
                                onChange={(e) => handleChange(e, index, 'preferred_qualifications')}
                            />
                            <IconButton
                                sx={{ padding: '0px 0px 0px 4px' }}
                                disabled={formData['preferred_qualifications'].length <= 1}
                                onClick={() => removeField(index, 'preferred_qualifications')}
                            >
                                <CloseRoundedIcon />
                            </IconButton>
                        </Stack>
                    ))}

                    <Stack sx={{ cursor: 'pointer' }} width={'94.4%'} mt={2} justifyContent={'center'} direction={'row'} border={'2px dotted #c4c4c4'} borderRadius={'4px'} height={'2.2rem'}>
                        <IconButton sx={{ padding: '0px 0px 0px 4px' }} onClick={() => addNewField('preferred_qualifications')}>
                            <AddRoundedIcon />
                        </IconButton>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}

export default AdditionalInfo