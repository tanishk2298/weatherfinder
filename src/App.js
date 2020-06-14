import React from "react"
import Title from "./components/Title"
import Form from "./components/Form"
import Weather from "./components/Weather"

const API_KEY = "f912da80f4d05621e296ce21808e02f7";

class App extends React.Component{
  state = {
    temperature : undefined,
    feels_like : undefined,
    lat : undefined,
    lon : undefined,
    humidity : undefined,
    description : undefined,
    error : undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value; 
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if(city && country && api_call){
      if (data.cod == 404) {
        this.setState({
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: "Input doesn't match any known location!"
        });
      } 
      else{
        console.log(data)
        this.setState({
          temperature : data.main.temp,
          feels_like : data.main.feels_like,
          lat : data.coord.lat,
          lon : data.coord.lon,
          humidity : data.main.humidity,
          description : data.weather[0].description,
          wind : data.wind.speed,
          error : ""
        })
      }
    }
    else{
      this.setState({
        temperature : undefined,
        feels_like : undefined,
        lat : undefined,
        lon : undefined,
        humidity : undefined,
        description : undefined,
        error : "Please enter the value."
      })
    }
  } 
  render(){ 
    return(
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-md-5 title-container">
                  <Title/>
                </div>
                <div className = "col-md-7 form-container">
                  <Form getWeather={this.getWeather}/> 
                  <Weather
                    temperature={this.state.temperature}
                    feels_like={this.state.feels_like}
                    lat = {this.state.lat}
                    lon= {this.state.lon}
                    humidity ={this.state.humidity}
                    description = {this.state.description}
                    wind = {this.state.wind}
                    error = {this.state.error} 
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

export default App;