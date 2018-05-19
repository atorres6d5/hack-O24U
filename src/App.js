import React, { Component } from 'react';
import { Button, Grid, Header, Menu, Table, Divider } from 'semantic-ui-react'
import ReadyToEat from "./components/readyToEat.js"
import Dir from "./components/dir.js"
import 'semantic-ui-css/semantic.min.css'
import FixTix from "./components/fixTix.js"

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      active:"EAT",
      plants:[
        {
          name:"Spinach",
          type:"Veggie",
          ready:true,
          location:"Floor 6",
          img:"./img/fresh-spinach.jpg"
        },
        {
          name:"something",
          type:"Veggie",
          ready:false,
          location:"Floor 6",
          img:"./img/fresh-spinach.jpg"
        }
      ],
      fish:[
        {
          type:"Gold Fish",
          location:"4 floor",
          img:"https://cdn.shopify.com/s/files/1/1141/1330/collections/goldfish-fancy_fdadb04d-1b34-4571-952f-63f91e3ee27a.jpg?v=1506350169"

        }
      ]

    }
  }

  clickReady = ( ) =>{
    this.setState({ active:"EAT"})
  }

  clickPlantDir = ( ) =>{
    this.setState({ active:"PLANTDIR"})
  }

  clickFixTix =( ) =>{
    this.setState({active:"FIX"})
  }


  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={13}>
              <Header as='h2'
                style={{textAlign:"center"}}
                >
                <Header.Content>
                  O2U
                </Header.Content>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Divider />

        <Grid centered >
          <Grid.Column textAlign="center" width={10}>

            {this.state.active==="EAT" ? <ReadyToEat plants={this.state.plants.filter(plant=> plant.ready===true)}/> : null }

            {this.state.active==="PLANTDIR" ? <Dir plants={this.state.plants} fish={this.state.fish}/> : null}

            {this.state.active==="FIX" ? <FixTix /> : null}

          </Grid.Column>
        </Grid>

        <Divider />


        <Button primary onClick={this.clickReady}>
          Ready 2 Eat
        </Button>
        <Button primary onClick={this.clickPlantDir}>
          What Plants do we have?
        </Button>
        <Button primary onClick={this.clickFixTix}>
          Fix Tix
        </Button>


      </div>
    );
  }
}

export default App;
