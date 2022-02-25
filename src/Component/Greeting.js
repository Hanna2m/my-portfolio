
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { borderRadius } from '@mui/system';
import Myphoto from './image/my_photo.png'

export default function Greeting() {
    return (
    <Box sx={{
        height: '70vh',
        display: "flex",
        flexDirection: "row"
    }}>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            width:"60%",
            height: '70vh',
            alignItems:'flex-end',
            justifyContent: "center",
            marginRigth: "24px"
        }}>
            <Typography variant="h3" gutterBottom component="div">
                Hello, I'm Hanna
            </Typography>
            <Typography variant="h5" gutterBottom component="div">
            I'm web-deweloper, passionate about UX, based in Berlin
            </Typography>
        </Box>
        <Box sx={{ width:"40%",
            display: "flex",
            height: '70vh',
            alignItems:'center',
            justifyContent: "flex-start",
            marginLeft: "24px"
        }}>
            <img src={Myphoto} style={{width: "256px", height:"256px", borderRadius: "256px", borderStyle: "dotted"}}/>
        </Box>
    </Box>
     
    );
  }