import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/system';

const SkillsItems = ({ icon, skills, description }) => {
    return (
       <Card sx={{ maxWidth: "400px" }}>
        <CardActionArea>
            <Box sx={{ 
                paddingTop:"32px",
                paddingBottom:"16px",
                display:'flex',
                maxWidth: "400px",
                justifyContent: "center" }}>
               <img src={icon} class="skill-img" alt="icon"/> 
            </Box>
          
          <CardContent sx={{
              display:'flex',
              flexDirection:'column',
              alignItems: "center"
          }}>
            <Typography gutterBottom variant="h5" component="div" style={{fontWeight: "bolder" }}>
              {skills}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };


export default SkillsItems