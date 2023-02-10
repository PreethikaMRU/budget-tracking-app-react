

const AddExpense = ({exName,exCost,handleName,handleCost,handleSave}) => {
    var bool=true;
    if(exName!=="" && exCost!==""){
         bool=false;
    }else{
         bool=true;
    }
    return(
      <div className="new-expense">
        <h2>Add Expense</h2>
        <div className="new-expenseEntry">
          <div className="name">
          <label className="name">Name </label>
          <input type={Text} value={exName} onChange={(e) => handleName(e.target.value)} required="required"></input>
          </div>
          <div className="cost">
          <label className="cost">Cost </label>
            <input type="number" value={exCost} onChange={(e) => handleCost(e.target.value)} required="required"></input>
          </div>
        </div>
        <button onClick={handleSave} disabled={bool}>Save</button>
        
      </div>
    );
  }

export default AddExpense;