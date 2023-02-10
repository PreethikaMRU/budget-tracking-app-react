const Expenses = ({name,cost,handleRemove}) => {
    return(
      <div className="list">
        <p>{name}</p>
        <div className="list-element">
          <p>$ {cost}</p>
          <p onClick={() => handleRemove(name)} className="buttonx">x</p>
        </div>
      </div>
    );
  }

export default Expenses;