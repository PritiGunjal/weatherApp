import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box'
import { Typography } from '@mui/material';

const useStyles = makeStyles(() => ({
  root: {
    width: '200px',
    display: 'inline-block',
    borderRadius: '6px',
    '&.MuiCard-root': {
      backgroundColor: '#d9c6b8',
    },
    padding: '16px 8px',
    margin: '10px',
    marginLeft: '30px',
    boxShadow:
      '0 0.5px 1px 0 rgba(0,0,0,0.01), 0 1px 3px 0 rgba(0,0,0,0.02), 0 2px 5px 0 rgba(0,0,0,0.02), 0 4px 8px 0 rgba(0,0,0,0.02)',
  },
  icon: {
    width: '80px',
    height: '80px'
  },
}))
type weatherCardProps = {
  dt: any, temp_max: any, main: any, icon: any
}
const WeatherCard = (props: weatherCardProps) => {
  const classes = useStyles();
  console.log(">>>prop", props)
  const date = new Date(props.dt);
  return (

    <Card className={classes.root}>
      <Box style={{ display: 'flex' }}>
        <CardHeader title={props.main}></CardHeader>
        <CardMedia
          component="img"
          className={classes.icon}
          src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
          alt="Paella dish"
        />
      </Box>
      {date.toLocaleDateString()}
      <Typography>Temp: {props.temp_max} &#8451;</Typography>
    </Card>
  )
}

export default WeatherCard