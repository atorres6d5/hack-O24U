import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'


const FixTix = ({}) => (
  <div>
    <Form>
      <Form.Field>
      <label>Name</label>
      <input placeholder='Name' />
    </Form.Field>
    <Form.Field>
      <label>Location</label>
      <input placeholder='4th Floor' />
    </Form.Field>
    <Form.TextArea label="What is your Request" placeholder="I want a clown fish added to 4th floor tank." />
    <Button type='submit'>Submit</Button>
    </Form>
  </div>
);

export default FixTix;
