import React, {Component} from 'react';
import {
  Button,
  Grid,
  Header,
  Menu,
  Table,
  Divider,
  Image
} from 'semantic-ui-react'
import ReadyToEat from "./components/readyToEat.js"
import Dir from "./components/dir.js"
import FixTix from "./components/fixTix.js"
import 'semantic-ui-css/semantic.min.css'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: "EAT",
      plants: [
        {
          name: "Spinach",
          type: "Veggie",
          ready: true,
          location: "Floor 6",
          img: "./img/fresh-spinach.jpg"
        }, {
          name: "Lettuce",
          type: "Veggie",
          ready: false,
          location: "c5",
          img: "./img/lettuce.jpg"
        }, {
          name: "Basil",
          type: "Veggie",
          ready: true,
          location: "a8",
          img: "./img/basil.jpg"
        }, {
          name: "Arugula",
          type: "Veggie",
          ready: true,
          location: "a9",
           img: "./img/arugula.jpg"
        }, {
          name: "Mint",
          type: "Veggie",
          ready: true,
          location: "a7",
          img: "./img/mint.jpg"
        }, {
          name: "Tomato",
          type: "Veggie",
          ready: false,
          location: "b4",
          img: "./img/tomato.jpg"
        }, {
          name: "Cucumber",
          type: "Veggie",
          ready: true,
          location: "b5",
          img: "./img/cucumber.jpg"
        }, {
          name: "Strawberry",
          type: "Fruit",
          ready: true,
          location: "a5",
          img: "./img/strawberry.jpg"
        }
      ],
      fish: [
        {
          type: "Gold Fish",
          location: "4 floor",
          img: "https://cdn.shopify.com/s/files/1/1141/1330/collections/goldfish-fancy_fdadb04d-1b34-4571-952f-63f91e3ee27a.jpg?v=1506350169"

        }
      ]

    }
  }

  clickReady = () => {
    this.setState({active: "EAT"})
  }

  clickPlantDir = () => {
    this.setState({active: "PLANTDIR"})
  }

  clickFixTix = () => {
    this.setState({active: "FIX"})
  }

  render() {
    document.querySelector("body").style.backgroundImage=`url("./img/Homepage.jpg")`

    return (<div>
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={13}>
            <Header as='h2' style={{
                textAlign: "center"
              }}>
              <Header.Content style={{justifyContent: "center"}}>
                <Image src="./img/logo.png" style={{maxHeight:"8rem"}}/>
              </Header.Content>
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Divider/>

      <Grid centered="centered">
        <Grid.Column textAlign="center" width={10}>

          {
            this.state.active === "EAT"
              ? <ReadyToEat plants={this.state.plants.filter(plant => plant.ready === true)}/>
              : null
          }

          {
            this.state.active === "PLANTDIR"
              ? <Dir plants={this.state.plants} fish={this.state.fish}/>
              : null
          }

          {
            this.state.active === "FIX"
              ? <FixTix/>
              : null
          }

        </Grid.Column>
      </Grid>

      <Divider/>
      <Grid centered style={{marginTop:"2rem"}}>
        <Button primary="primary" onClick={this.clickReady}>
          Ready 2 Eat
        </Button>
        <Button primary="primary" onClick={this.clickPlantDir}>
          What Plants do we have?
        </Button>
        <Button primary="primary" onClick={this.clickFixTix}>
          Fix Tix
        </Button>
      </Grid>


    </div>);
  }
}

export default App;
