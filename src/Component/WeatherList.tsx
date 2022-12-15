
import { Box, Typography } from '@mui/material'
import React from 'react'
import WeatherCard from './WeatherCard'
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
type weatherLstProps = {
  weathers: any
}
const useStyles = makeStyles(() => ({
  root: {
    width: '200px',
    display: 'inline-block',
    borderRadius: '6px',

    padding: '16px 8px',
    margin: '10px',
    '&.MuiCard-root': {
      backgroundColor: '#acc4a1',
    },
    boxShadow:
      '0 0.5px 1px 0 rgba(0,0,0,0.01), 0 1px 3px 0 rgba(0,0,0,0.02), 0 2px 5px 0 rgba(0,0,0,0.02), 0 4px 8px 0 rgba(0,0,0,0.02)',
  },
  icon: {
    width: '80px',
    height: '80px'
  },
  mainContainer: {
    display: 'flex',
    justifyContent: 'center'
  }

}))
const WeatherList = (props: weatherLstProps) => {
  const classes = useStyles()

  return (
    <Box>
      <Box>
        {props.weathers.map((item: any, id: number) => (
          <>
            {id === 0 ?
              <Box className={classes.mainContainer}> <Card className={classes.root}>
                <Box style={{ display: 'flex' }}>
                  <CardHeader title={item.weather[0].main}></CardHeader>
                  <CardMedia
                    component="img"
                    className={classes.icon}
                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    alt="Paella dish"
                  />
                </Box>
                <Typography>Temp: {item.main.temp} &#8451;</Typography>
              </Card></Box>
              :
              <WeatherCard temp_max={item.main.temp} dt={item.dt * 1000} main={item.weather[0].main} icon={item.weather[0].icon} />
            }

          </>

        ))} </Box></Box>
  )
}

export default WeatherList