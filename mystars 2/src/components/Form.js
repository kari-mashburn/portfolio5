import React, { Component } from 'react';
import '../App.css';

class Form extends Component {
  //set the state
    state = {
      shown: true,
      name: "",
      sign: "",
      date: "",
      data: [],      
    };

  //When someone adds their name update the state
  changeName = e =>{
    e.preventDefault();
    this.setState({name: e.target.value})
  }
  //When someone updates their sign, update the state
  changeSign = e => {
    e.preventDefault();
    this.setState({sign: e.target.value})
  }
  //When someone updates the date selected, update the state
  changeDate = e =>{
    e.preventDefault();
    this.setState({date: e.target.value})
  }

   showContent = () =>{
    let form = document.getElementsByClassName("form-style-8");
    if(form.style.display === 'none'){
      form.style.display === "block";
    }else{
      form.style.display = "none";
    }
  }
  //Validating and showing the results
  toggle= (e) =>{
    e.preventDefault();
    let form = document.getElementById("myForm");
    this.setState({
      shown: !this.state.shown
    });
        if (this.state.name == null) {
          alert('Please enter your name');
          form.reset();
          return false
        }
        else if (this.state.date == null) {
          alert('Please enter the date you would like to view');
          form.reset();
          return false
        }
        else if(this.state.sign == null){
          alert("Please select your sign");
          form.reset();
          return false;
        }
        else{
              const URL = `https://aztro.sameerkumar.website/?sign=${this.state.sign}&day=${this.state.date}`;
              console.info(URL);
              fetch(URL, {
                  method: 'POST'
                }).then(data => data.json())
                .then(data => {
                  this.setState({
                    data
                  });
                });

        }
  }

  render() {
    //set the display  settings for buttons to toggle on and off
    let shown = {display: this.state.shown ? "block": "none"};
    let hidden = {display: this.state.shown ? 'none': "block"};

    return (
      //Form
      <div class="form-style-8">
        <form id="myForm" style={shown}>
          <legend>Please fill out the following to find your horoscope:</legend>
          <fieldset>
            <label for="name">First Name:</label>
            <input type="text" name="name" id="name" onChange={this.changeName} required/>
          </fieldset>
          <fieldset>
            <label for="sign">Please Select Your Sign</label>
            <select name="signs" id="signs" onChange={this.changeSign} required>
              <option value=""></option>
              <option value="Capricorn">Capricorn</option>
              <option value="Aquarius">Aquarius</option>
              <option value="Pisces">Pisces</option>
              <option value="Aries">Aries</option>
              <option value="Taurus">Taurus</option>
              <option valeu="Gemini">Gemini</option>
              <option value="Cancer">Cancer</option>
              <option value="Leo">Leo</option>
              <option value="Virgo">Virgo</option>
              <option value="Libra">Libra</option>
              <option value="Scorpio">Scorpio</option>
              <option value="Sagittarius">Sagittarius</option>
            </select>
          </fieldset>
          <fieldset>
            <label for="date">Which date would you like to view?</label>
            <select name="date" id="date" onChange={this.changeDate} required>
              <option value=""></option>
              <option value="yesterday">Yesterday</option>
              <option value="today">Today</option>
              <option value="tomorrow">Tomorrow</option>
            </select>
          </fieldset>
          <fieldset>
            <input type="submit" class="btn" id="submitBtn" onClick={this.toggle.bind(this)} onSubmit={this.toggle.bind(this)}/>
            <input type="reset" class="btnx" id="resetBtn" />
            </fieldset>
        </form>
         {/* this is for when the user clicks submit it shows the results */}
        <div style={hidden} class="card">
          <h3>Hello {this.state.name}, here are your horoscope results:</h3>
           <p>Description: {this.state.data.description}</p>
          <div class="horoscopeContent">
            <p>Current Date: {this.state.data.current_date}<br />
            Your Sign: {this.state.sign}<br />
            Your Compatible Sign: {this.state.data.compatibility}<br />
            Your Lucky Number: {this.state.data.lucky_number}<br />
            Your Lucky Time: {this.state.data.lucky_time}<br />
            Your Mood: {this.state.data.mood}<br />
            Your Color: {this.state.data.color}<br />
            <input type="submit" id="backBtn" value="Go Back" onClick={this.toggle.bind(this)} onSubmit={this.toggle.bind(this)} />
            </p>
          </div>
        </div>
      </div>
    );
  }

}
export default Form;