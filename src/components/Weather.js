import React from "react"

class Weather extends React.Component{
    render(){
        return(
            <div className="weather_info">
                {
                    this.props.temperature && <p className="weather__key" data-aos="fade-left" data-aos-delay="200">Temperature : 
                    <span className="weather__value"> {this.props.temperature}°C</span></p>
                }
                {
                    this.props.feels_like && <p className="weather__key" data-aos="fade-left" data-aos-delay="300">Feels Like : 
                    <span className="weather__value"> {this.props.feels_like}°C </span></p>
                }
                {
                    this.props.humidity && <p className="weather__key" data-aos="fade-left" data-aos-delay="400">Humidity : 
                    <span className="weather__value"> {this.props.humidity}%</span></p>
                }
                {
                    this.props.description && <p className="weather__key" data-aos="fade-left" data-aos-delay="500">Description : 
                    <span className="weather__value"> {this.props.description}</span></p>
                }
                {
                    this.props.error && <p className="weather__error"> {this.props.error}</p>
                }
                {
                    this.props.wind && <p className="weather__key" data-aos="fade-left" data-aos-delay="600">Wind : 
                    <span className="weather__value"> {this.props.wind} km/hr</span></p>
                }
                {
                    this.props.lat && this.props.lon && <p className="weather__key" data-aos="fade-left" data-aos-delay="700">Latitute & Longitude: 
                    <span className="weather__value"> {this.props.lat} N, {this.props.lon} E</span></p>
                }
            </div>
        )
    }
}


export default Weather;
