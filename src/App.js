import TextField from '@mui/material/TextField';
import './App.css';
import { Button } from '@mui/material';
import { useState } from 'react';


function App() {
  //state creation
  const [principle,setPrinciple]=useState('')
  const [year,setYear]=useState('')
  const [rate,setRate]=useState('')
  const [interest,setInterest]=useState('')
  console.log(principle);
  console.log(rate);
  console.log(year);

  const handleCalculate=(e)=>{
     let output = principle*year*rate /100
     console.log(output);
     setInterest(output)
  }

  const reset=(e)=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
  }

  return (
    <div className="App">
      <header className="App-header">
       <div className="container">
        <div className="head">
         <h1 >Simple Interest Calculator</h1>
         <p>The rate at which you borrow or lend money is called the simple interest. If a borrower takes money from a lender, an extra amount of money is paid back to the lender. The borrowed money which is given for a specific period is called the principal. The extra amount which is paid back to the lender for using the money is called the interest.</p>
         </div>
         <div className="card">
          <h3 className='symbol'>&#8377; {interest}</h3>
          <p id='para'>Your Total Simple Interest</p>

         
         </div>
       
         <div className='input'>
         <TextField id="outlined-basic" label="Principle Amount" variant="outlined"
         onChange={e=>setPrinciple(e.target.value)} value={principle}/>
         <br />
         <TextField id="outlined-basic" label="Rate of Interest" variant="outlined" 
         onChange={e=>setRate(e.target.value)} value={rate}/>
         <br/>
         <TextField id="outlined-basic" label="Year" variant="outlined"
         onChange={e=>setYear(e.target.value)}  value={year}/>
         </div>
         <Button onClick={handleCalculate} id='btn1' variant="contained">Calculate</Button>&nbsp;&nbsp;
          <Button onClick={reset} id='btn2' variant="outlined">Reset</Button>
       </div>
      </header>
    </div>
  );
}

export default App;
