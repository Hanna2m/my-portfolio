import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SkillsItems from './Skills_item';
import icon1 from './image/icon_1.png'
import { useLottie } from "lottie-react"
import Lottie from 'lottie-react';
import womanEngineAnimation from './lotties/Woman_Engine.json';


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
        height: '400px',
        display: "flex",
        flexDirection: "row",
        marginBottom: "40px"
    }}>
        
        <Box className='box35' sx={{
            width: '20%',
            marginLeft: '10%',
            marginRight: '5%'}}>
          { View }
        </Box>
        <Box sx={{
            width: '35%',
            marginLeft:'20px'
        }}>
            <Box className='box60' >
                <Typography variant="h3" gutterBottom component="div">
                    Who I am
                </Typography>
                <Typography variant="body1">
                I believe that leaving the comfort zone is an amazing opportunity to grow. Hence I never hesitate before something new in my life. 
                </Typography>
                <Typography variant="body1">
                So I quit audit, took the UI/UX design course and did the first step in a new sphere, and started crafting user interfaces. 
                I worked for small startups and crafted products across the most popular platforms. 
                </Typography>
                <Typography variant="body1">
                And now I begin a new chapter in my life. I start coding.
                </Typography>
                <Typography variant="body1">
                Every new task for me is an amazing opportunity to immerse myself in a new field of knowledge and try to make human's every day being even a little bit better.
                </Typography>

            </Box>  
        </Box>

        </Box>
        <Box sx={{
        height: '30vh',
        display: "flex",
        flexDirection: "row"
    }}>
        
        <Box className='box35'>
            <Typography variant="h3" gutterBottom component="div">
                What I do
            </Typography>
        </Box>
        <Box sx={{
            height: "30vh",
            width: '65%'
        }}>
            <Box className='box60' >
                <Typography variant="h5" gutterBottom component="div" style={{marginLeft:'20px', fontWeight:'bold'}}>
                    Design
                </Typography>
                <Typography variant="body1" style={{marginLeft:'20px'}}>
                I design solutions where users' needs and business goals meet. 
                </Typography>
            </Box>
            <Box className='box60'>
                <Typography variant="h5" gutterBottom component="div" style={{marginLeft:'20px', fontWeight:'bold'}}>
                   Development
                </Typography>
                <Typography variant="body1" style={{marginLeft:'20px'}}>
                I build websites and apps using JavaScript, React and Node.js. 
                I create modern, responsive websites that attract customers and are suitable for all types of businesses. 
                </Typography>
            </Box>  
        </Box>
        </Box>

        <Box className='box35'>
            <Typography variant="h3" gutterBottom component="div">
                What I use
            </Typography>
        </Box>
        <SkillsItems 
            icon={icon1} 
            skills='HTML / CSS / UX UI'
            description='Work from scratch to create a beautiful experience using Figma, HTML5 and CSS.' />
            
        </>
    
     
    );
  }