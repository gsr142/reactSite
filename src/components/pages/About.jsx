import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';


export default function IntroDivider() {
    return (
      <Card variant="outlined" sx={{ maxWidth: 480, margin: 'auto' }}>
        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h5" component="div">
              About Me
            </Typography>
          </Stack>
          <Typography color="text.secondary" variant="body1">
          Welcome! My name is Greg and I build things for the web. I began my coding journey by learning to write web apps in Python using the Streamlit library, then switched to web development with HTML, CSS, and Java Script. In 2023, I completed the Full Stack Web Development Bootcamp at UC Berkley Extension. Since completing the course, I have been working as an AI Trainer, while sharpening my coding skills. I am always looking for new and interesting projects to work on, and enjoy colloaborating with developers who share my passion. If you have any questions, or would like to discuss a project, please reach out through the contact form, or through one of the links at the foot of the page.
          </Typography>
        </Box>
        <Divider />
      </Card>
    );
  }