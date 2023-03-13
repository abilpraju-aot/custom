import React, { Component } from 'react';
import './styless.css';
export default class Progressbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
        };
    }
    //const { type } = this.props.component;
    render() {
        const Width = this.state.value;
        return (

            <div>
                <div className='progress-background' style={{borderColor: `${Width === 100 ? "#41ff00" : 'white'}`}}>
                    <h4>
                        {Width}% Completed
                    </h4>
                    <progress id="file" value={Width} max="100" style={{ width: "100%" }}> {Width}% </progress>
                    {/* {Width != '0%' && <div className="skill" style={{ width: `${Width}`, backgroundColor: "#d792ff" }}>{Width}</div>} */}
                </div>
                {/* <div className="skill" style={{ width: `${Width}`, backgroundColor: `${Color}` }}>{Width}</div> */}
            </div>
        );
    }
}
