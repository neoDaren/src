import React, { useEffect, useState } from "react";
import { AppHeader } from "../components/AppHeader";
import { AppButton } from "../components/AppButton";
import { AppInput } from "../components/AppInput";
// import { useHref } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [name, setName]=useState("")
  const [phone, setPhone] = useState("")
  const [nameError,setNameError] = useState(false)
  const [phoneError,setPhoneError] = useState(false)
  const nameRegex = /^([А-ЯЁа-яё]+|[A-Za-z]+)$/;
  const phoneRegex = /^\+?\d{10,}$/;
  const [buttonError, setButtonError] = useState(true)
 const navigate = useNavigate();



  const handleClick =()=>{
    if (!nameRegex.test(name)) {
      setNameError(true)
    }else if(!phoneRegex.test(phone))
      {
     setPhoneError(true)
      }else{
        setNameError(false)
        setPhoneError(false)
        navigate("/step-one")
      }
    }
  // const handleClick =()=>{
  //     if (!nameRegex.test(name)) {
  //       setNameError(true)
  //     }else{
  //       setNameError(false)
  //     }
  //     !phoneRegex.test(phone) ? setPhoneError(true):setPhoneError(false) }

  // console.log("ИМЯ", name);
  // console.log("Номер телефона",phone);

  useEffect(()=>{
    if(!name || !phone){
       setButtonError(true)
    }else{
      setButtonError(false)
    }
  },[name,phone])
   

  
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <AppHeader
            headerText="Добро пожаловать в квиз от лучшего учебного центра"
            headerType="h1"
          />
          <form className="welcome__form">
            <AppInput 
            hasError={nameError}
            inputLable="Ваше имя" 
            inputPlaceholder="Ваш ответ" 
            inputType="text" 
            id="username" 
            errorText="Введите Имя в правильном формате " 
            // hasError={true}
            inputValue={name}
            inputChange={setName} 

            />
            <AppInput 
            hasError={phoneError}
            inputLable="Ваш номер" 
            inputPlaceholder="+998-90" 
            inputType="tel" 
            id="phone" 
            errorText="Введите Номер в правильном формате" 
            inputValue={phone}
            inputChange={setPhone}
            />

            <AppButton 
            isDisabled={buttonError} 
            buttonType="button" 
            buttonText="Далее" 
            buttonClick={handleClick}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
