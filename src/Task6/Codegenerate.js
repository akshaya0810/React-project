import React, { Component } from 'react'
import axios from "axios";
import './Codegenerate.css'

export class Codegenerate extends Component {
    state = { advice: "" };

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios
            .get("https://api.adviceslip.com/advice")
            .then((response) => {
                const { advice } = response.data.slip;
                this.setState({ advice });
            })
            .catch((error) => {
                console.error("Error fetching advice:", error);
            });
    };

  render() {
    const { advice } = this.state;

        return (
            <div className="quote-generator-container">
                <div className="quote-card">
                    <h1 className="quote-text">{advice}</h1>
                    <button className="quote-button" onClick={this.fetchAdvice}>
                        Generate quote
                    </button>
                </div>
            </div>
        );
    }
}


export default Codegenerate