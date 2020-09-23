import React, { Component } from 'react';
import './App.css';
import Recycling from './recycling.js';
import Refuse from './refuse.js';

class App extends Component {
  state = {
    date: '',
    recycleDate: new Date(2020, 8, 25, 12),
    refuseDate: new Date(2020, 9, 2, 12),
    nextRecycleDate: '',
    nextRefuseDate: '',
    isRecycle: false,
    isRefuse: false,
  }

  componentDidMount() {
    this.getDates();
  }

  getDates = () => {
    var today = new Date();
    this.setState({ date: today });
    this.findNextDates(today, this.state.recycleDate, this.state.refuseDate);
  }

  findNextDates = (today, recycleDate, refuseDate) => {
    if (today <= recycleDate) {
      this.setState({ isRecycle: true, nextRecycleDate: recycleDate});
      return;
    } else if (today <= refuseDate) {
      this.setState({ isRefuse: true , nextRefuseDate: refuseDate});
      return;
    } else {
      console.log("Increasing dates");
      let twoWeeks = 1000 * 60 * 60 * 24 * 14;
      recycleDate = new Date(recycleDate.getTime() + twoWeeks);
      refuseDate = new Date(refuseDate.getTime() + twoWeeks);
      this.findNextDates(today, recycleDate, refuseDate);
    }
  }

  render() {
    let showRecycle = this.state.isRecycle ? <Recycling date={this.state.nextRecycleDate}/> : null;
    let showRefuse = this.state.isRefuse ? <Refuse date={this.state.nextRefuseDate}/> : null;
    return (
      <div>
        {showRecycle}
        {showRefuse}
      </div>
    )
  };
}

export default App;
