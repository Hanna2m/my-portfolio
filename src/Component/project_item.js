import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';

const ProjectItem = ({ icon, name, description, link}) => {
    // function NewTab() {
    //     window.open( { link }, "_blank");
    // }
    return (
      <Grid xs={12} md={10} className="projects">
        <Card className='project-card'>
    <Box id="project-cover">
       <img src={icon}  alt="cover" /> 
    </Box>
  <Box sx={{display:'flex', flexDirection:'column', height:'256px'}}>
    <CardContent sx={{height: '216px'}} >
    <Typography gutterBottom variant="h5" component="div" style={{fontWeight: "bolder" }}>
      {name}
    </Typography>
    <Typography variant="body1" color="text.secondary">
      {description}
    </Typography>
    </CardContent>
    <Box sx={{alignSelf:'flex-start', marginLeft: '10px', marginBottom: '16px'}}>
        <Button href={link} >Github</Button>  
    </Box>
  
  </Box>
</Card>
      </Grid>
       
    );
  };


export default ProjectItem