import React, { useEffect, useState } from "react";
import { AppHeader } from "../components/AppHeader";
import { AppInput} from "../components/AppInput";
import { AppButton } from "../components/AppButton";
// import { LinkButton } from "../components/LinkButton";
import { useNavigate } from "react-router-dom";
const StepOne = () => {
  const [text, setText]=useState("")
  const [textError,setTextError] = useState(false)
  const russianTextRegex = /^[А-ЯЁа-яё0-9\s]+$/;
  const navigate = useNavigate();
  const handleClick =()=>{
    if(!russianTextRegex.test(text)){
      setTextError(true)
    }else{
      setTextError(false)
      navigate("/step-two")
    } }

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                скидка за прохождение опроса: 
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <AppHeader
        />
    
          <AppInput
           hasError={textError}
            inputLable="" 
            inputPlaceholder="Ваш ответ" 
            inputType="text" 
            id="username" 
            errorText="Введите ваш ответ на русском языке  " 
            // hasError={false} 
            inputValue={text}
            inputChange={setText}
          />
        
            <AppButton
             isDisabled={false} 
             buttonType="button" 
             buttonText="Далее"
             buttonClick={handleClick} />
             {/* <LinkButton isDisabled={false} linkType="Button" linkText="Далее" linkBtn="/step-two"/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
