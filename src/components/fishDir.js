import React from 'react';
import { Table, Image } from 'semantic-ui-react'


const FishDir = ({ fishes }) => (
  <div>
    <div>
      <Table celled padded style={{justifyContent:"center"}}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Type</Table.HeaderCell>
            <Table.HeaderCell>Location</Table.HeaderCell>
            <Table.HeaderCell>Photo</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {fishes.map(fish=>{
            return(
              <Table.Row key={fish.type}>
                <Table.Cell>
                  {fish.type}
                </Table.Cell>
                <Table.Cell>
                  {fish.location}
                </Table.Cell>
                <Table.Cell>
                  <Image src={fish.img} style={{maxHeight: "4rem"}}/>
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </div>
  </div>
);

export default FishDir;
