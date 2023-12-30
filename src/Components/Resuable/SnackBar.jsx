/* eslint-disable react/prop-types */
import Button from '@mui/material/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';

export default function IntegrationNotistack(props) {
    const {message, variant} = props
    const { enqueueSnackbar } = useSnackbar();
    const handleClickVariant = () => () => {
        enqueueSnackbar(message, { variant });
    };
    return (
        <SnackbarProvider>
            <Button onClick={handleClickVariant()}>Show success snackbar</Button>
        </SnackbarProvider>
    );
}