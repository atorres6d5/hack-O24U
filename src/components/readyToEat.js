import React from 'react';
import { Header, Table, Image } from 'semantic-ui-react'



const ReadyToEat = ({ plants }) => (
  <div>
    <Table celled padded style={{justifyContent:"center"}}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Plant</Table.HeaderCell>
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.HeaderCell>Ready 2 Eat</Table.HeaderCell>
          <Table.HeaderCell>Location</Table.HeaderCell>
          <Table.HeaderCell>Photo</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {plants.map(plant=>{
          return(
            <Table.Row key={plant.name}>
              <Table.Cell>
                {plant.name}
              </Table.Cell>
              <Table.Cell>
                {plant.type}
              </Table.Cell>
              <Table.Cell>
                {plant.ready ? "Ready" : "Not Ready Yet"}
              </Table.Cell>
              <Table.Cell>
                {plant.location}
              </Table.Cell>
              <Table.Cell>
                <Image src={plant.img} style={{maxHeight: "4rem"}}/>
              </Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table>
  </div>
);

export default ReadyToEat ;
