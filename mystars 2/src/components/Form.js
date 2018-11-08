import React, { Component } from 'react';
import '../App.css';
class Form extends Component {
    state = {
      shown: true,
      cap_yesterday: [],
      cap_today: [],
      cap_tomorrow: [],
      aqu_yesterday: [],
      aqu_today: [],
      aqu_tomorrow: [],
      pis_yesterday: [],
      pis_today: [],
      pis_tomorrow: [], 
      ari_yesterday: [],
      ari_today: [],
      ari_tomorrow: [], 
      tau_yesterday: [],
      tau_today: [],
      tau_tomorrow: [],  
      gem_yesterday: [],
      gem_today: [],
      gem_tomorrow: [],
      can_yesterday: [],
      can_today: [],
      can_tomorrow: [],  
      leo_yesterday: [],
      leo_today: [],
      leo_tomorrow: [],      
      vir_yesterday: [],
      vir_today: [],
      vir_tomorrow: [],      
      lib_yesterday: [],
      lib_today: [],
      lib_tomorrow: [],      
      sco_yesterday: [],
      sco_today: [],
      sco_tomorrow: [],
      sag_yesterday: [],
      sag_today: [],
      sag_tomorrow: [],      
    };

  componentDidMount() {
    //Capricorn
    const Cap_Y_URL = 'https://aztro.sameerkumar.website/?sign=capricorn&day=yesterday';
    fetch(Cap_Y_URL, {
        method: 'POST'
      }).then(cap_yesterday => cap_yesterday.json())
      .then(cap_yesterday => {
        this.setState({
          cap_yesterday
        });
      });
    const Cap_TY_URL = 'https://aztro.sameerkumar.website/?sign=capricorn&day=today';
    fetch(Cap_TY_URL, {
        method: 'POST'
      }).then(cap_today => cap_today.json())
      .then(cap_today => {
        this.setState({
          cap_today
        });
      });
    const Cap_TW_URL = 'https://aztro.sameerkumar.website/?sign=capricorn&day=tomorrow';
    fetch(Cap_TW_URL, {
        method: 'POST'
      }).then(cap_tomorrow => cap_tomorrow.json())
      .then(cap_tomorrow => {
        this.setState({
          cap_tomorrow
        });
      });

    //Aquarius
    const Aqu_Y_URL = 'https://aztro.sameerkumar.website/?sign=aquarius&day=yesterday';
    fetch(Aqu_Y_URL, {
        method: 'POST'
      }).then(aqu_yesterday => aqu_yesterday.json())
      .then(aqu_yesterday => {
        this.setState({
          aqu_yesterday
        });
      });
    const Aqu_TY_URL = 'https://aztro.sameerkumar.website/?sign=aquarius&day=today';
    fetch(Cap_TY_URL, {
        method: 'POST'
      }).then(aqu_today => aqu_today.json())
      .then(aqu_today => {
        this.setState({
          aqu_today
        });
      });
    const Aqu_TW_URL = 'https://aztro.sameerkumar.website/?sign=aquarius&day=tomorrow';
    fetch(Aqu_TW_URL, {
        method: 'POST'
      }).then(aqu_tomorrow => aqu_tomorrow.json())
      .then(aqu_tomorrow => {
        this.setState({
          aqu_tomorrow
        });
      });

    //Pisces
    const Pis_Y_URL = 'https://aztro.sameerkumar.website/?sign=pisces&day=yesterday';
    fetch(Pis_Y_URL, {
        method: 'POST'
      }).then(pis_yesterday => pis_yesterday.json())
      .then(aqu_today => {
        this.setState({
          aqu_today
        });
      });
    const Pis_TY_URL = 'https://aztro.sameerkumar.website/?sign=pisces&day=today';
    fetch(Pis_TY_URL, {
        method: 'POST'
      }).then(pis_today => pis_today.json())
      .then(pis_today => {
        this.setState({
          pis_today
        });
      });
    const Pis_TW_URL = 'https://aztro.sameerkumar.website/?sign=pisces&day=tomorrow';
    fetch(Pis_TW_URL, {
        method: 'POST'
      }).then(pis_tomorrow => pis_tomorrow.json())
      .then(pis_tomorrow => {
        this.setState({
          pis_tomorrow
        });
      });

    //Aries
    const Ari_Y_URL = 'https://aztro.sameerkumar.website/?sign=aries&day=yesterday';
    fetch(Ari_Y_URL, {
        method: 'POST'
      }).then(ari_yesterday => ari_yesterday.json())
      .then(ari_yesterday => {
        this.setState({
          ari_yesterday
        });
      });
    const Ari_TY_URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today';
    fetch(Ari_TY_URL, {
        method: 'POST'
      }).then(ari_today => ari_today.json())
      .then(ari_today => {
        this.setState({
          ari_today
        });
      });
    const Ari_TW_URL = 'https://aztro.sameerkumar.website/?sign=aries&day=tomorrow';
    fetch(Ari_TW_URL, {
        method: 'POST'
      }).then(ari_tomorrow => ari_tomorrow.json())
      .then(ari_tomorrow => {
        this.setState({
          ari_tomorrow
        });
      });

    //Taurus
    const Tau_Y_URL = 'https://aztro.sameerkumar.website/?sign=taurus&day=yesterday';
    fetch(Tau_Y_URL, {
        method: 'POST'
      }).then(tau_yesterday => tau_yesterday.json())
      .then(tau_yesterday => {
        this.setState({
          tau_yesterday
        });
      });
    const Tau_TY_URL = 'https://aztro.sameerkumar.website/?sign=taurus&day=today';
    fetch(Tau_TY_URL, {
        method: 'POST'
      }).then(tau_today => tau_today.json())
      .then(tau_today => {
        this.setState({
          tau_today
        });
      });
    const Tau_TW_URL = 'https://aztro.sameerkumar.website/?sign=taurus&day=tomorrow';
    fetch(Tau_TW_URL, {
        method: 'POST'
      }).then(tau_tomorrow => tau_tomorrow.json())
      .then(tau_tomorrow => {
        this.setState({
          tau_tomorrow
        });
      });

    //Gemini
    const Gem_Y_URL = 'https://aztro.sameerkumar.website/?sign=gemini&day=yesterday';
    fetch(Gem_Y_URL, {
        method: 'POST'
      }).then(gem_yesterday => gem_yesterday.json())
      .then(gem_yesterday => {
        this.setState({
          gem_yesterday
        });
      });
    const Gem_TY_URL = 'https://aztro.sameerkumar.website/?sign=gemini&day=today';
    fetch(Gem_TY_URL, {
        method: 'POST'
      }).then(gem_today => gem_today.json())
      .then(gem_today => {
        this.setState({
          gem_today
        });
      });
    const Gem_TW_URL = 'https://aztro.sameerkumar.website/?sign=gemini&day=tomorrow';
    fetch(Gem_TW_URL, {
        method: 'POST'
      }).then(gem_tomorrow => gem_tomorrow.json())
      .then(gem_tomorrow => {
        this.setState({
          gem_tomorrow
        });
      });

    //Cancer
    const Can_Y_URL = 'https://aztro.sameerkumar.website/?sign=cancer&day=yesterday';
    fetch(Can_Y_URL, {
        method: 'POST'
      }).then(can_yesterday => can_yesterday.json())
      .then(can_yesterday => {
        this.setState({
          can_yesterday
        });
      });
    const Can_TY_URL = 'https://aztro.sameerkumar.website/?sign=cancer&day=today';
    fetch(Can_TY_URL, {
        method: 'POST'
      }).then(can_today => can_today.json())
      .then(can_today => {
        this.setState({
          can_today
        });
      });
    const Can_TW_URL = 'https://aztro.sameerkumar.website/?sign=cancer&day=tomorrow';
    fetch(Can_TW_URL, {
        method: 'POST'
      }).then(can_tomorrow => can_tomorrow.json())
      .then(can_tomorrow => {
        this.setState({
          can_tomorrow
        });
      });

    //Leo
    const Leo_Y_URL = 'https://aztro.sameerkumar.website/?sign=leo&day=yesterday';
    fetch(Leo_Y_URL, {
        method: 'POST'
      }).then(leo_yesterday => leo_yesterday.json())
      .then(leo_yesterday => {
        this.setState({
          leo_yesterday
        });
      });
    const Leo_TY_URL = 'https://aztro.sameerkumar.website/?sign=leo&day=today';
    fetch(Leo_TY_URL, {
        method: 'POST'
      }).then(leo_today => leo_today.json())
      .then(leo_today => {
        this.setState({
          leo_today
        });
      });
    const Leo_TW_URL = 'https://aztro.sameerkumar.website/?sign=leo&day=tomorrow';
    fetch(Leo_TW_URL, {
        method: 'POST'
      }).then(leo_tomorrow => leo_tomorrow.json())
      .then(leo_tomorrow => {
        this.setState({
          leo_tomorrow
        });
      });

    //Virgo
    const Vir_Y_URL = 'https://aztro.sameerkumar.website/?sign=virgo&day=yesterday';
    fetch(Vir_Y_URL, {
        method: 'POST'
      }).then(vir_yesterday => vir_yesterday.json())
      .then(vir_yesterday => {
        this.setState({
          vir_yesterday
        });
      });
    const Vir_TY_URL = 'https://aztro.sameerkumar.website/?sign=virgo&day=today';
    fetch(Vir_TY_URL, {
        method: 'POST'
      }).then(vir_today => vir_today.json())
      .then(vir_today => {
        this.setState({
          vir_today
        });
      });
    const Vir_TW_URL = 'https://aztro.sameerkumar.website/?sign=virgo&day=tomorrow';
    fetch(Vir_TW_URL, {
        method: 'POST'
      }).then(vir_tomorrow => vir_tomorrow.json())
      .then(vir_tomorrow => {
        this.setState({
          vir_tomorrow
        });
      });

    //Scorpio 
    const Sco_Y_URL = 'https://aztro.sameerkumar.website/?sign=scorpio&day=yesterday';
    fetch(Sco_Y_URL, {
        method: 'POST'
      }).then(sco_yesterday => sco_yesterday.json())
      .then(sco_yesterday => {
        this.setState({
          sco_yesterday
        });
      });
    const Sco_TY_URL = 'https://aztro.sameerkumar.website/?sign=scorpio&day=today';
    fetch(Sco_TY_URL, {
        method: 'POST'
      }).then(sco_today => sco_today.json())
      .then(sco_today => {
        this.setState({
          sco_today
        });
      });
    const Sco_TW_URL = 'https://aztro.sameerkumar.website/?sign=scorpio&day=tomorrow';
    fetch(Sco_TW_URL, {
        method: 'POST'
      }).then(sco_tomorrow => sco_tomorrow.json())
      .then(sco_tomorrow => {
        this.setState({
          sco_tomorrow
        });
      });

    //Sagittarius
    const Sag_Y_URL = 'https://aztro.sameerkumar.website/?sign=sagittarius&day=yesterday';
    fetch(Sag_Y_URL, {
        method: 'POST'
      }).then(sag_yesterday => sag_yesterday.json())
      .then(sag_yesterday => {
        this.setState({
          sag_yesterday
        });
      });
    const Sag_TY_URL = 'https://aztro.sameerkumar.website/?sign=sagittarius&day=today';
    fetch(Sag_TY_URL, {
        method: 'POST'
      }).then(sag_today => sag_today.json())
      .then(sag_today => {
        this.setState({
          sag_today
        });
      });
    const Sag_TW_URL = 'https://aztro.sameerkumar.website/?sign=sagittarius&day=tomorrow';
    fetch(Sag_TW_URL, {
        method: 'POST'
      }).then(sag_tomorrow => sag_tomorrow.json())
      .then(sag_tomorrow => {
        this.setState({
          sag_tomorrow
        });
      });
  }
 renderStuff = () => {
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
    let form = document.getElementsByClassName("form-style-8");
    if(form.style.display == 'none'){
      form.style.display == "block";
    }else{
      form.style.display = "none";
    }
  }
  toggle= (e) =>{
    e.preventDefault();
    this.setState({
      shown: !this.state.shown
    });
  }
  render() {
    let shown = {display: this.state.shown ? "block": "none"};
    let hidden = {display: this.state.shown ? 'none': "block"};

    return (
      <div class="form-style-8">
        <form style={shown}>
          <legend>Please fill out the following to find your horoscope:</legend>
          <fieldset>
            <label for="fname">First Name:</label>
            <input type="text" name="fname" id="fname" required/>
          </fieldset>
          <fieldset>
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
          </fieldset>
          <fieldset>
            <label for="date">Which date would you like to view? Can only view, Today, Tomorrow, or Yesterday?</label>
            <input type="radio" name="date" id="today" required/>Today
            <input type="radio" name="date" id="tomorrow"/>Tomorrow
            <input type="radio" name="date" id="yesterday"/>Yesterday
          </fieldset>
          <fieldset>
            <h4>Additional Criteria (Not Required)</h4>
            <input type="checkbox" name="color" id="color" value="Color"/>Color 
            <input type="checkbox" name="mood" id="mood" value="Mood"/>Mood 
            <input type="checkbox" name="otherSigns" id="otherSigns" value="Other Signs"/>Compatibile Sign
            <input type="checkbox" name="time" id="time" value="Time"/>Lucky Time
            <input type="checkbox" name="number" id="number" value="Number"/>Lucky Number 
          </fieldset>
          <fieldset>
            <input type="submit" id="submitBtn" onClick={this.toggle.bind(this)}/>
            <input type="reset" id="resetBtn" />
            </fieldset>
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
