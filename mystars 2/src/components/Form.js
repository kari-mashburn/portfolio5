import React, { Component } from 'react';

class Main extends Component {
  state ={
    data: []
  };
  
  componentDidMount() {
    const url = "https://fengshui-api.com/api/v1/findSecretFriend?token=59eb6aa3Ecej4ce8Nm33mFF689NNA8AfA6C14hD1&year=1992&month=1&day=7";
    fetch(url)
      .then(res=>res.json())
      .then(data=>{
        console.log(data.results);
        this.setState({data:data.results});
      });
    }
  renderStuff = ()=>{
  }
  
  render() {
    return (
      <section>

      </section>
    );
  }
}

export default Main;
