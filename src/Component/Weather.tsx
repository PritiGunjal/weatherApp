import { Button, TextField } from '@mui/material';
import React from 'react'
import WeatherList from './WeatherList';
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(() => ({
  inputConatiner: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px'
  },
  button: {
    marginLeft: '10px'
  },
  errorBox: {
    display: 'flex',
    justifyContent: 'center',
  }
}))
const Weather = () => {
  const classes = useStyles()
  const [city, setCity] = React.useState<string>('');
  const [data, setData] = React.useState<any>([])
  const [error, setError] = React.useState<boolean>(false)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  
  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    let value = e.target.value as string;
    setCity(value)
  }
  const onSearch = () => {
    fetch(`${process.env.REACT_APP_API_URL}/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
      .then((response) => response.json())
      .then((result) => {
        if (result.cod >= 400) {
          setError(true)
        }
        else {
          setError(false)
        }
        setData(result.list)
        let arr_date: string[] = [];
        let arr_data: string[] = []
        for (let i = 0; i < result.list.length; i++) {
          if (!arr_date.includes(result.list[i].dt_txt.split(' ')[0])) {
            arr_date.push(result.list[i].dt_txt.split(' ')[0])
            arr_data.push(result.list[i])
          }
          setData(arr_data)
        }
        setIsLoading(true)
     
      });
  };
  return (
    <div>
      <Box className={classes.inputConatiner}>
        <TextField value={city} onChange={handleChange}>Enter your City</TextField>
        <Button sx={{ marginLeft: '10px' }} variant='contained' onClick={onSearch}>Get Weather</Button>
      </Box>
      {isLoading && error === false ? <WeatherList weathers={data} /> : error === true ? <Box className={classes.errorBox}>Something Wrong...Please check</Box> : ''}
    </div>
  )
}

export default Weather
