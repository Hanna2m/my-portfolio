import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SkillsItems from './Skills_item';
import icon1 from './image/icon_1.png'
import { useLottie } from "lottie-react"
import womanEngineAnimation from './lotties/Woman_Engine.json';
import icon2 from './image/icon_2.png';
import icon3 from './image/icon_3.png';
import icon4 from './image/icon_4.png';
import icon5 from './image/icon_5.png';
import icon6 from './image/icon_6.png';
import Grid from '@mui/material/Grid';

export default function AboutMe() {
    const options = {
        animationData: womanEngineAnimation,
        loop: true,
        autoplay: true,
        rendererSettings: {

        }
      };
    
      const { View } = useLottie(options);

    return (
        <>
        <Box sx={{
        maxHeight: '400px',
        display: "flex",
        flexDirection: "row",
        marginBottom: "40px"
    }}>
        
        <Box className='box35' sx={{
            width: '30%',
            marginLeft: '10%',
            marginRight: '5%',
            alignContent: 'center'}}>
          { View }
        </Box>
        <Box sx={{
            width: '60%',
            marginLeft:'40px',
            // marginTop: '60px'
            alignContent: 'center'
        }}>
            <Box className='box60' >
                <Typography variant="h4">About me</Typography>
                <br></br>
                <Typography variant="h5">
                I'm developer with design background. I'm eager to create solutions where users' needs and business goals meet.
                <br></br><br></br>
                Every new task for me is an amazing opportunity to immerse myself in a new field of knowledge and try to make human's every day being even a little bit better.
                </Typography>

            </Box>  
        </Box>

        </Box>
        

        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={2} columnSpacing={2} sx={{display: 'flex',
                    justifyContent:'center', padding:'10%'}}>
                <Grid item xs={4}>
                <SkillsItems 
                    icon={icon1} 
                    skills='HTML / CSS / UX UI'
                    description='Work from scratch to create a beautiful experience using Figma, HTML5 and CSS.' />
                </Grid>
                <Grid item xs={4}>
                <SkillsItems
                    icon={icon2}
                    skills='JavaScript'
                    description='Use in both sides web-development: fron-end and back-end.' />
                </Grid>
                <Grid item xs={4}>
                <SkillsItems
                    icon={icon3}
                    skills='React'
                    description='Create interactive UI, using Hooks and React-router' />
                </Grid>
                <Grid item xs={4}>
                <SkillsItems
                    icon={icon4}
                    skills='Node.js'
                    description='Use Node.js for creating API server to produce dynamic web-content' />
                </Grid>
                <Grid item xs={4}>
                <SkillsItems
                    icon={icon5}
                    skills='(NO)SQL DB'
                    description='Use Node.js for creating API server to produce dynamic web-content' />
                </Grid>
                <Grid item xs={4}>
                <SkillsItems
                    icon={icon6}
                    skills='REST API'
                    description='Use Node.js for creating API server to produce dynamic web-content' />
                </Grid>
            </Grid>
        </Box>
        
            
        </>
    
     
    );
  }