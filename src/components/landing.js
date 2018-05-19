import React, { Component } from 'react';
import {
  Button,
  Grid,
  Header,
  Menu,
  Table,
  Divider,
  Transition
} from 'semantic-ui-react'

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

        <Image src={this.state.picture} size='big' />



      </div>
    );
  }

}

export default Landing;
