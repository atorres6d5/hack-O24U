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
  render() {
    return (
      <div>
        <Grid centered>
          <Grid.Row>
            <Grid.Column>
              <Button style={{
                alignItems:"center",
                marginTop:"3rem"
              }}
              onClick={()=>this.props.history.push("/home")}
              >
                Login
              </Button>
            </Grid.Column>
            <Grid.Column width={13}>
              <Header as='h1' style={{
                  textAlign: "center"
                }}>
                <Header.Content style={{justifyContent: "center"}}>
                  <Image src="./img/logo.png" style={{maxHeight:"8rem"}}/>
                </Header.Content>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Divider />

        <Grid centered>
          <Grid.Row>
            <Grid.Column width={10} style={{justifyContent:"center"}}>
              <Image src="./img/Homeslideshow2.jpg" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }

}

export default Landing;
