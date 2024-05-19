import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();
import { LinkButton } from "../components/LinkButton";
import { ProgressBar } from "../components/PorgressBar";
import {AppHeader} from "../components/AppHeader"
import { AnswerItem } from "../components/AnswerItem";
const StepTwo = () => {
  const variants = [
    {
      id:"variant-1",
      labelText:"Fronted"
    },
    {
      id:"variant-2",
      labelText:"BackEnd"
    },
    {
      id:"variant-3",
      labelText:"Ux"
    },
    {
      id:"variant-4",
      labelText:"Uzum"
    },
  ]
  const [checkedAnswer,setCheckedAnswer] = useState(null)
  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressBar/>
        {/* <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1 _active"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div> */}
          <div className="question">
            {/* <h2>1. Занимательный вопрос</h2> */}
            <AppHeader
            headerText="На каком курсе вы обучаетесь?"
            headerType="h2"
            />
            <ul className="variants">
              {/* <li className="variant-wrapper">
                <input required type="radio" name="variant-1" id="variant-1" />
                <label htmlFor="variant-1">Ваш ответ</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant-2" id="variant-2" />
                <label htmlFor="variant-2">Ваш ответ</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant-3" id="variant-3" />
                <label htmlFor="variant-3">Ваш ответ</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant-4" id="variant-4" />
                <label htmlFor="variant-4">Ваш ответ</label>
              </li> */}
              {variants.map((elem) => {
              return<AnswerItem key={elem.id} 
              id={elem.id} 
              lableText={elem.labelText}
              onChange={()=> setCheckedAnswer(elem.id)}
              checked={checkedAnswer ===elem.id}
              />
              
            })}
            </ul>
            {/* <button type="button" disabled id="next-btn">
              Далее
            </button> */}
                    <LinkButton isDisabled={false} linkType="Button" linkText="Далее" linkBtn="/step-three"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
