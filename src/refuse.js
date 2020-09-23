import React, { Component } from 'react';

class Refuse extends Component {
    render() {
        let nextdate = this.props.date;
        let date = nextdate.getDate() + '/' + (nextdate.getMonth()+1) + '/' + nextdate.getFullYear();
        return (
            <div className="collection refuse fade-in">
                <div>
                <div>
                    <h3>The next collection date is <b>{date}</b>.</h3>
                    <br />
                    <h3>It is <b>refuse</b> and <b>garden waste</b>.</h3>
                    <h6>(and food waste)</h6>
                </div>
                </div>
            </div>
        );
    }
}

export default Refuse;