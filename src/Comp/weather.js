import React, { useState, useEffect } from 'react';

import {WeatherForm} from './weather_form'
import {Card,Background} from './weather.element';


import {
TiWeatherPartlySunny
,TiWeatherDownpour,
TiWeatherCloudy,
TiWeatherStormy,
TiWeatherSnow,
TiWeatherSunny,
} from 'react-icons/ti';






const api_key='81c98d581bc850afd90827c69ccb23f1'




const url_test=('https://jsonplaceholder.typicode.com/comments')

const UseEffectFetchData = () =>{


    
    
   
   
    const [icons,SetIcons]=useState('')
    const [weather,SetWeather]=useState({
           
        city:'',
        country:'',
        temp:'',
        mintemp:'',
        maxtemp:'',
        weather_type:'',
        weather_id:'',
        weather_icon:'',
        
        
        
        
    });
    



    const getWeather = async (e) =>{
        e.preventDefault();


        const city = e.target.city.value
        
        
        
        
        const api_call =  await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
            
        )
        const response = await api_call.json();

    
        

        SetWeather({...weather,
            city: response.name,
            country:response.sys.country,
            temp:celsius(response.main.temp),
            mintemp:celsius(response.main.temp_min),
            maxtemp:celsius(response.main.temp_max),
            weather_type:response.weather[0].description,
            weather_id:response.weather[0].id,
            
            
        
        })


        console.log(weather.weather_id)

        GetweatherIcon();


    }




    const GetweatherIcon=()=>{
        switch (true) {
            case weather.weather_id >= 200 && weather.weather_id < 232:
                SetIcons(<TiWeatherStormy/>)
              break;
            case weather.weather_id >= 300 && weather.weather_id <= 321:
                SetIcons(<TiWeatherCloudy/>)
              break;
            case weather.weather_id >= 500 && weather.weather_id <= 521:
                SetIcons(<TiWeatherDownpour/>)
              break;
            case weather.weather_id >= 600 && weather.weather_id <= 622:
                SetIcons(<TiWeatherSnow/>)
              break;
            case weather.weather_id >= 701 && weather.weather_id <= 781:
                SetIcons(<TiWeatherCloudy/>)
              break;
            case weather.weather_id === 800:
                SetIcons(<TiWeatherPartlySunny/>)
              break;
            case weather.weather_id >= 801 && weather.weather_id <= 804:
                SetIcons(<TiWeatherCloudy/>)
              break;
            default:
                SetIcons(<TiWeatherPartlySunny/>)
          }
    }

    


   
    
    const celsius = (temp) =>{
        let cell = Math.floor(temp - 273.150);
        return cell;

    }



    
    return (
        
        <>
        <Background>
        <Card >

         <form onSubmit={getWeather}>

        
        
        <WeatherForm 

           
              city={weather.city}
              country={weather.country}
              temp={weather.temp}
              mintemp={weather.mintemp}
              maxtemp={weather.maxtemp}
              weather_type={weather.weather_type}
              city={weather.city}
              weatherIcon={icons}

              
              
              
            
            />

            </form>
            
            

        </Card>
        </Background>



        </>
        
        
        
      
        
    )


    }



export default UseEffectFetchData;