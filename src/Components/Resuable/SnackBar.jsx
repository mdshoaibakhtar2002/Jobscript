/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';

export default function IntegrationNotistack(props) {
    const {message, variant, show, setShow} = props
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        if(show){
            enqueueSnackbar(message, { variant });
            setShow(false)
        }
      }, [show]);
    return (<></>);
}