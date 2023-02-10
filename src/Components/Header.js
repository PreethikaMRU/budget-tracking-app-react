import { useState } from "react";

const Header = ({expense}) => {
    const [output,setOutput]=useState(1000);
    var total=0;
    var remain=1000;
    var spent=0;
    const handleInput = () => {
        
        let text = prompt("Enter your budget:","1000");
        if(text===""){
            setOutput(0);
        }else{
            setOutput(text);
        }
    }
    
    expense.map((item) => {
        total+=Number(item.value);
        return 0;
    })
    
    remain = Number(output)-total;
    spent = Number(output)-remain;
    return(
        <div className="header-info">
        <div className="header-budget">
        <p>Budget: ${output}</p>
        <button onClick={handleInput}>Edit</button>
        </div>
        <p>Remaining: ${remain}</p>
        <p>Spent so far: ${spent}</p>
      </div>
    );
}
export default Header;