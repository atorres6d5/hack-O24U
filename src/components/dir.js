import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import ReadyToEat from "./readyToEat.js"
import FishDir from "./fishDir.js"


class Dir extends Component {
  constructor(props){
    super(props)
    this.state={
      activeItem:"plants"
    }
  }

  handleClick =(e, {name})=>{
    this.setState({ activeItem:name })
  }


  render() {
    return (
      <div>
        <Menu widths={6}>
          <Menu.Item
            name="plants"
            active={this.state.activeItem==="plants"}
            onClick={this.handleClick}
            >
            Plants
          </Menu.Item>
          <Menu.Item
            name="aquarium"
            acitve={this.state.activeItem==="aquarium"}
            onClick={this.handleClick}
            >
            Aquarium
          </Menu.Item>
        </Menu>

        {
          this.state.activeItem==="plants" ? <ReadyToEat plants={this.props.plants} /> : null
        }

        {this.state.activeItem==="aquarium" ? <FishDir fishes={this.props.fish} /> : null }


      </div>
    );
  }

}

export default Dir;
