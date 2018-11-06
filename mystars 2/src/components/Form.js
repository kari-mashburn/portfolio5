import React, { Component } from 'react';
import '../App.css';
class Form extends Component {
    state = {
      data: []
    };

    componentDidMount() {

    }
  renderStuff = ()=>{
      const sign = document.getElementById("signs").value;
      const date = document.getElementById("date").value;
      const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=${date}`;
      fetch(URL, {
          method: 'POST'
        }).then(response => response.json())
        .then(json => {
          this.setState({
            data: json
          });
        });
      const name = document.getElementById("fname").value;
      const color = document.getElementById("color");
      const mood = document.getElementById("mood");
      const compatibility = document.getElementById("otherSigns");
      const time = document.getElementById("time");
      const number = document.getElementById("number");

      if(color.checked === true){
        <p>Color: {this.state.data.color}</p>
      }
      if(mood.checked === true){
        <p>Mood: {this.state.data.mood}</p>
      }
      if(compatibility === true){
        <p>Compatibile Sign: {this.state.data.compatibility}</p>
      }
      if(time.checked === true){
        <p>Lucky Time: {this.state.data.lucky_time}</p>
      }
      if(number.checked === true){
        <p>Lucky Number: {this.state.data.lucky_number}</p>
      }
  }

  showContent = () =>{
    
  }
  render() {
    return (
      <div class="form-style-8">
        <form>
          <legend>Please fill out the following to find your horoscope:</legend>
          <label for="fname">First Name:</label>
          <input type="text" name="fname" id="fname" required/>
          <label for="sign">Please Select Your Sign</label>
          <select name="signs" id="signs" required>
            <option value="capricorn">Capricorn</option>
            <option value="aquarius">Aquarius</option>
            <option value="pisces">Pisces</option>
            <option value="aries">Aries</option>
            <option value="taurus">Taurus</option>
            <option valeu="gemini">Gemini</option>
            <option value="cancer">Cancer</option>
            <option value="leo">Leo</option>
            <option value="virgo">Virgo</option>
            <option value="libra">Libra</option>
            <option value="scorpio">Scorpio</option>
            <option value="sagittarius">Sagittarius</option>
          </select>
          <label for="date">Which date would you like to view? Can only view, Today, Tomorrow, or Yesterday?</label>
          <input type="radio" name="date" id="today" required/>Today
          <input type="radio" name="date" id="tomorrow"/>Tomorrow
          <input type="radio" name="date" id="yesterday"/>Yesterday
          <div>
            <h4>Additional Criteria (Not Required)</h4>
            <input type="checkbox" name="color" id="color" value="Color"/>Color 
            <input type="checkbox" name="mood" id="mood" value="Mood"/>Mood 
            <input type="checkbox" name="otherSigns" id="otherSigns" value="Other Signs"/>Compatibile Sign
            <input type="checkbox" name="time" id="time" value="Time"/>Lucky Time
            <input type="checkbox" name="number" id="number" value="Number"/>Lucky Number 
          </div>
          <input type="submit" id="submitBtn" onClick={this.showContent}/>
        </form>
      </div>
    );
  }
}

export default Form;
/*
<div>
Current Date: {this.state.data.current_date} <br />
Compatibility: {this.state.data.compatibility} <br />
Lucky Number: {this.state.data.lucky_number} <br />
Lucky Time: {this.state.data.lucky_time} <br />
Color: {this.state.data.color} <br />
Date Range: {this.state.data.date_range} <br />
Mood: {this.state.data.mood} <br />
Description: {this.state.data.description} <br />
</div>
*/
