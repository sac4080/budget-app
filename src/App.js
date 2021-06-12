import React, { useState  } from 'react'
import { useEffect } from 'react'
import { Jumbotron, Container,Navbar } from 'reactstrap'
import Form from './components/Form'
import List from './components/List'





const ALL_EXPENSES = localStorage.getItem('expenses')
  ? JSON.parse(localStorage.getItem('expenses'))
  : []


function App() {
	
  const [expenses, setExpenses] = useState(ALL_EXPENSES)

  useEffect(() => {
	localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [Utility, setUtility]= useState('')

const handleName = event => {
	
	setName(event.target.value)
  }
  
  const handleAmount = event => {
	
	setAmount(event.target.value)
  }
  const handleUtility = event => {
	  setUtility(event.target.value)
  }
  const handleSubmitForm = event => {
	event.preventDefault()
	//check whether the name is not empty and the amount is not negative
	if (name !== '' && amount > 0 && Utility !== '') {
	  // single expense object
	  const expense = { name, amount,Utility }
	  // do not override previous values in the array
	  // use spread operator to access previous values
	  setExpenses([...expenses, expense])
  
	  // clean input fields
	  setName('')
	  setAmount('')
	  setUtility('')
	} else {
	  console.log('Invalid expense name or the amount')
	}
  } 
  const handleClearExpenses = () => {
	setExpenses([])
  }
  return (

    <Container className="text-center">
      <Jumbotron fluid>
        <h3 className="display-6" style={{backgroundColor: "lightblue", fontStyle: "italic", fontWeight: "bold"}}>
		<Navbar bg="light" variant="light">
          Budget Tracker  App
		  </Navbar>
        </h3>
		
		<br/>
		<div>
          <p style={{textAlign:"left"}}>
            Total Expense:{' '}
            <span className="text-success">
              ${' '}
              {expenses.reduce((accumulator, currentValue) => {
                return (accumulator += parseInt(currentValue.amount))
              }, 0)}
            </span>
          </p>
        </div>
		<br/>
		<Form
  			name={name}
  			amount={amount}
			Utility={Utility}
  			handleName={handleName}
  			handleAmount={handleAmount}
			handleUtility={handleUtility}
  			handleSubmitForm={handleSubmitForm}
			handleClearExpenses={handleClearExpenses}
		/>
		
		<List expenses={expenses} />
      </Jumbotron>
    </Container>
  )
}

export default App