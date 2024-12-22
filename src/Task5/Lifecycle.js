import React, { Component } from "react";
import "./Lifecycle.css"
class Lifecycle extends Component {
  constructor() {
    super();
    this.state = {
      mountimage: null,      
      updateimage: null,    
      unmountimage: null,     
      showUpdatedImage: false, 
    };
  }

  componentDidMount() {
  this.setState({
      mountimage: "https://media.istockphoto.com/id/1667682276/photo/happy-cute-little-indian-girl-child-standing-having-fun-at-summer-park-or-garden.jpg?s=612x612&w=0&k=20&c=uyKqGUieu-JHCKbku1ZmThe81Cvj7jJWu6t0DTSwxq4=",
    });
  }

  toggleImage = () => {
    this.setState((prevState) => ({
      showUpdatedImage: !prevState.showUpdatedImage,
      updateimage: "https://thumbs.dreamstime.com/b/portrait-de-jeune-belle-femme-sexy-sur-la-nature-33352997.jpg",
      unmountimage: "https://faithmag.com/sites/default/files/styles/tablet/public/2022-09/single_parent_families.jpg?itok=3oqonyhF",
    }));
  };

  render() {
    return (
      <>
   <div className="backgrnd">
        {this.state.mountimage && !this.state.showUpdatedImage && (
          <img src={this.state.mountimage} alt="Initial" />
        )}

        {this.state.showUpdatedImage && (
          <img src={this.state.updateimage} alt="Updated" />
        )}
        <div style={{marginLeft:"20px"}}>
        {this.state.unmountimage && !this.state.showUpdatedImage && (
          <img src={this.state.unmountimage} alt="Unmount Image" />
        )}
        </div>

        <button onClick={this.toggleImage}>
          {this.state.showUpdatedImage ? "Hide Image" : "Show Updated Image"}
        </button>
        </div>
      </>
    );
  }
}

export default Lifecycle;
