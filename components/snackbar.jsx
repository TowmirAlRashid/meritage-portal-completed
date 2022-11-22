import React, { useState } from 'react';

import { Box, Slide, Snackbar } from '@mui/material'
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
}



// Custom Snackbar component that will show upon usage, on the bottom-right side of the screen for web and tab view and on the center for mobile view 
const CustomizedSnackbar = ({ vertical, horizontal, openSnack, handleClose, message }) => {
    const [openAlert, setOpenAlert] = useState(false);

    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenAlert(false);
      };

  return (
    <Box>
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={openSnack}
            autoHideDuration={2000}
            onClose={handleClose}
            message={message}
            TransitionComponent={TransitionLeft}
            key={vertical + horizontal}
            sx={{
                "& .MuiSnackbar-root": {
                    backgroundColor: "green !important"
                },
            }}
        >
            <Alert onClose={handleAlertClose} severity="success" sx={{ width: '100%', "& .MuiAlert-action": { display: "none"}, "& .MuiAlert-icon": { display: "none"} }}>
                {message}
            </Alert>
        </Snackbar>
    </Box>
  )
}

export default CustomizedSnackbar