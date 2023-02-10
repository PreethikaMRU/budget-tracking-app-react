import './App.css';
import {useState} from "react";
import AddExpense from './Components/AddExpense';
import Expenses from './Components/Expenses';
import Header from './Components/Header';



function App() {
  
  const[search,setSearch] = useState("");
  const [expenseName, setExpenseName] = useState("");
  const [expenseCost, setExpenseCost] = useState("");
  const [expenseList, setExpenseList] = useState([{
    name:"Shopping",
    value:100
  }]);
  

  const handleNameChange = (value) =>{
    setExpenseName(value);
  }
  const handleCostChange = (value) => {
    setExpenseCost(value);
  }
  const handleSave = () => {
    setExpenseList((list) => [...list,{
      name:expenseName,
      value:expenseCost
    }]);
    setExpenseName("");
    setExpenseCost("");
  }
  const handleRemove = (itemName) => {
    setExpenseList(expenseList.filter((item) => item.name!==itemName));
  }
  
  return (
    <div className="App">
      <h1>A Simple Budget Planner</h1>
      <Header expense={expenseList}/>
      <div className="expense-list">
        <h2>Expenses</h2>
        <input className="Search-Bar" type={Text} placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}></input>
        <div className="expense-ele">
        {expenseList.filter((exp) => {
          if(exp.name.toLowerCase().includes(search.toLowerCase())){
            return exp;
          }
        }).map((exp,key) => {
          return(<Expenses key={key} name={exp.name} cost={exp.value} handleRemove={handleRemove}/>);
        }) }
        </div>
      </div>
      <AddExpense exName ={expenseName} exCost={expenseCost} handleName = {handleNameChange} handleCost={handleCostChange} handleSave={handleSave} />
      <small>By preethika</small>
    </div>
  );
}

export default App;
