import React, { Component } from 'react';

class Recycling extends Component {
    render() {
        let nextdate = this.props.date;
        let date = nextdate.getDate() + '/' + (nextdate.getMonth()+1) + '/' + nextdate.getFullYear();
        return (
            <div className="collection recycle fade-in">
                <div>
                    <h3>The next collection date is <b>{date}</b>.</h3>
                    <br />
                    <h3>It is <b>recycling</b>.</h3>
                    <h6>(and food waste)</h6>
                </div>
            </div>
        );
    }
}

export default Recycling;