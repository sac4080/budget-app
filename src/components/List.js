import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

const List = ({ expenses }) => (
  <div>
      <br/>
      <br/>
      <br/>
      <p style={{textAlign:"center",fontWeight:"bold",backgroundColor:"blue",fontSize:30}}>Dashboard</p>
    <ListGroup >
      {expenses.map(item => (
        <ListGroupItem key={item.id} active>
          {item.name} - $ {item.amount}
        </ListGroupItem>
      ))}
    </ListGroup>
  </div>
)

export default List