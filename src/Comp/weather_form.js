
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


import { IconContext } from "react-icons";



const minmaxTemp =(min,max)=>{
    
    if(min&&max){

        return(
            <h3>
    
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
            </h3>
        )

    }
   
    
}



export const WeatherForm = props => {
    return (

        <>

            


           
       
            <TextField id="city" label="City" />
            
            
           
       
            
             <Button type="submit" id="searchBtn" variant='contained' color="secondary"  >
                 Get Weather
                 
             </Button>
             <h1>{props.city}</h1>

            

             
        <IconContext.Provider value={{ color: "blue", className: "global-class-name",size:"4rem" }}>
            <div>
                {props.weatherIcon}
            </div>
        </IconContext.Provider>
             
             {props.temp ? (<h1 className="py-2">{props.temp}&deg;</h1>):null}

             if

             {minmaxTemp(props.mintemp,props.maxtemp)}

             <h4 className="py-3">{props.weather_type}</h4>


            
</>




    )


}