import React, { Component } from 'react';
import {
  Button,
  Grid,
  Header,
  Menu,
  Table,
  Divider,
  Image,
  Transition
} from 'semantic-ui-react'
import Carousel from "react-carousel"



import 'semantic-ui-css/semantic.min.css'

class Landing extends Component {
  constructor(){
    super()
    this.state={
      pictures:[
        "./img/basil.jpg",
        "./img/arugula.jpg",
        "./img/cucumber.jpg"
      ]
    }
  }

  // counter = ( )=>{
  //   for(let i=0; i<arr.length; i++){
  //     setTimeout(i=>{
  //       return arr[i]
  //     }, 6000)
  //     i==arr.length-1 ? i=0 : null
  //   }
  // }



  render() {
    return (
      <div>
        <Grid centered>
          <Grid.Row>
            <Grid.Column width={13}>
              <Header as='h1' style={{
                  textAlign: "center"
                }}>
                <Header.Content style={{justifyContent: "center"}}>
                  O2U
                </Header.Content>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Divider />

        <Carousel
          controlWidth={50}
          itemWidth={240}
          itemMargin={20}
        >
          <div>foo</div>
          <div>bar</div>
          <div>baz</div>
        </Carousel>


      </div>
    );
  }

}

export default Landing;
