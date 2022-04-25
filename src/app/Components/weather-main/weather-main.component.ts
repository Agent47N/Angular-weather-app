import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.css']
})
export class WeatherMainComponent implements OnInit {

  noti: string ;
  weatherReport:any;
  url = 'https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=ff1bc4683fc7325e9c57e586c20cc03e';
  constructor() { }

  ngOnInit()
  {
    this.getData();
    //console.log(this.weatherReport);
  }

  getData()
  {
    fetch(this.url)
          .then(response=>response.json())
          .then(data=>{this.putData(data);})
  }

  putData(data:JSON)
  {
    let str = "404";
    this.weatherReport = data;
    console.log(typeof(this.weatherReport.cod));
    if(this.weatherReport.cod != str)
    {
      this.noti = "";
      this.weatherReport.temp_celcius = (this.weatherReport.main.temp - 273.15).toFixed(0);
      this.weatherReport.temp_min = (this.weatherReport.main.temp_min - 273.15).toFixed(0);
      this.weatherReport.temp_max = (this.weatherReport.main.temp_max - 273.15).toFixed(0);
      this.weatherReport.temp_feels_like = (this.weatherReport.main.feels_like - 273.15).toFixed(0);
      this.weatherReport.humidity = (this.weatherReport.main.humidity).toFixed(0);
    }
    else
    {
      this.weatherReport.temp_celcius = "-";
      this.weatherReport.temp_min = "-";
      this.weatherReport.temp_max = "-";
      this.weatherReport.temp_feels_like = "-";
      this.weatherReport.humidity = "-";
      this.noti = "Enter valid location";
      console.log(this.noti);
    }
    
  }
  editURL(val:string)
  {
    //this.noti = "";
    console.log(val);
    val.toLowerCase();
    this.url = "https://api.openweathermap.org/data/2.5/weather?q="+val+"&appid=ff1bc4683fc7325e9c57e586c20cc03e";
    this.getData();
  }

}
