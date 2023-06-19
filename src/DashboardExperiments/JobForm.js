import {Drawer, Typography, Box, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
const JobForm = (props) => {
    const [isDrawOpen, setIsDrawOpen] = useState(false);
    return(
        <>
        <IconButton size = 'large' edge = 'start' color = 'inherit' aria-label = 'logo' onclick = {() => setIsDrawOpen(true)}>
            <MenuIcon/>
        </IconButton>
            <Drawer anchor = "right" open = {isDrawOpen} onClose = {() => setIsDrawOpen(false)}>
                <Box p = {2} width = '250px' textAlign = 'center'>
                    <Typography variant = 'h6' component = 'div'>
                        Side Panel
                    </Typography>
                </Box>
            </Drawer>
        </>
    );
}

export default JobForm;