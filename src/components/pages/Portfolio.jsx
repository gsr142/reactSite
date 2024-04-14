import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';


export default function TitlebarImageList() {
  return (
    <ImageList sx= {{ maxWidth: 900, margin: 'auto'}}>
      
      {itemData.map((item) => (
        <ImageListItem key={item.img} 
        sx = {{":hover": {cursor: "pointer", transform: "scale(1.02)"}, }}>
          <img
            
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            onClick={() => window.open(item.link)}
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: '/images/loudmouth.png',
    title: 'Loudmouth',
    rows: 2,
    cols: 2,
    featured: true,
    link: 'https://github.com/ahkar-hein/Loud-Mouth?tab=readme-ov-file',
  },
  {
    img: '/images/trivia.png',
    title: 'Trivia-Mania',
    link: 'https://trivia-mania-34ca81ef04dc.herokuapp.com/',
  },
  {
    img: '/images/tipout-app.png',
    title: 'Tipout App',
    link: 'https://gsr142-tipcalcwebapp-web-zg4sej.streamlit.app/',
  },
  {
    img: '/images/ace-hearts.png',
    title: 'OFC Calculator',
    link: 'https://gsr142-ofc-royalty-calculator-main-q5amqf.streamlit.app/'
  },
  {
    img: '/images/weather-app.png',
    title: 'Five day forecast',
    link: 'https://github.com/gsr142/five-day-forecast',
  },
  {
    img: '/images/football.png',
    title: 'Fantasy Eliminator- coming soon',
    link: 'https://github.com/gsr142/FantasyEliminator',
    rows: 2,
    cols: 2,
    featured: true,
  }
];