import React, {iseState} from "react";

export const Test = () => {
    const [count,setCount] = iseState(0);
    console.log("состояние", count)
    return(
        <div>
            <h1>[count]</h1>
            <button onClick={()=>setCount((e)=>{e+1
        })}></button>
        </div>
    )
}