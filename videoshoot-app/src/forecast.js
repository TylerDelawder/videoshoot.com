import React from "react";
import Weather2 from "./components/weather";
import Form2 from "./components/form2";
// import SWeather from "./components/stateless_weather";
// import SForm from "./components/stateless_form"
import Titles2 from "./components/titles2";
const Api_Key = "023f8079cbe4cac3087385d615200704";



class forecast extends React.Component {

  
  state = {

    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

 //getForecast is used to make the api call
  getForecast = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();   
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast/?q=${city},${country}&appid=${Api_Key}&units=imperial&cnt5`);
    const response = await api_call.json();    
    console.log(response);
    if(city && country){
      this.setState({
        temperature: response.list.main.temp,
        city: response.city.name,
        country: response.city.country,
        humidity: response.list.main.humidity,
        description: response.list[0].weather[0].description,
        error: ""
      })
    }else{
      this.setState({
        error: "Please input search values..."
      })
    }
  }
  
  render() {
    
    return (

      <div>
         <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                <Titles2 />
                </div>
                <div className="col-xs-7 form-container">
                <Form2 loadWeather={this.getForecast} />
                  <Weather2
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default forecast;

