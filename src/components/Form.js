import React from 'react'

import {
  Form as BTForm,
  FormGroup,
  Input,
  Label,
  Col,
  Button
} from 'reactstrap'


const Form = ({ name, amount,Utility, handleName, handleAmount,handleUtility, handleSubmitForm,handleClearExpenses }) => (
  <BTForm style={{ margin: 10 }} onSubmit={handleSubmitForm}>
    <FormGroup className='row'>
      <Label for='exampleEmail' sm={2}>
        Name of Expense
      </Label>
      <Col sm={4}>
        <Input
          type='text'
          name='name'
          id='expenseName'
          placeholder='Name of expense'
          value={name}
          onChange={handleName}
        />
        <br/>
      </Col>
      
    </FormGroup>
    <FormGroup className='row'>
      <Label for='exampleEmail' sm={2}>
        $ Amount
      </Label>
      <Col sm={4}>
        <Input
          type='number'
          name='amount'
          id='expenseAmount'
          placeholder='0.00'
          value={amount}
          onChange={handleAmount}
        />
        <br/>
      </Col>

    </FormGroup>
    <FormGroup className='row'>
      <Label for='exampleEmail' sm={2}>
        Type of Utility
      </Label>
      <Col sm={4}>
        <Input
          type='text'
          name='Utility'
          id='expenseName'
          placeholder='Utility'
          value={Utility}
          onChange={handleUtility}
        />
        <br/>
      </Col>
      
    </FormGroup>
    <Button type='submit' color='success' style={{position:"absolute", left:80}}>
      Add
    </Button>{' '}
    <Button type='submit' color='danger' onClick={handleClearExpenses} style={{position:"absolute", left:150}}>
      Delete
    </Button>
  </BTForm>

)



export default Form