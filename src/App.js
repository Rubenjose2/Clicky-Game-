import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Jumbo from "./components/Jumbo/Jumbo";
import Cards from "./components/Cards/Cards";
// import the img_source from a Json file
import img_source from "./cards_img.json";

class App extends Component {
  state = {
    images_sources: [...img_source],
    counter: 0
  };

  clickEventHandler = index => {
    console.log("Is click it " + index);
    // Pull counter
    let new_counter = this.state.counter;

    const new_card_array = this.state.images_sources.map(card => {
      if (card.id === index) {
        card.click_state = true;
        new_counter = ++new_counter;
      }
      return card;
    });
    console.log(new_card_array);
    this.setState({
      images_sources: new_card_array.sort(() => 0.5 - Math.random()),
      counter: new_counter
    });
    //   new_card_array.sort(() => 0.5 - Math.random())
  };
  render() {
    console.log(this.state.images_sources);
    return (
      <div className="App">
        {/* Here go the Header Portion */}
        <div>
          <Header counter={this.state.counter} />
        </div>
        {/* End the Header Portion */}
        {/* JUMBO TRON SECTION */}
        <div>
          <Jumbo />
        </div>
        {/* Card sections */}
        <div>
          <div className="container">
            <div className="row">
              {this.state.images_sources.map((card, index) => (
                <Cards
                  key={card.id}
                  image={card.source}
                  click={() => this.clickEventHandler(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
