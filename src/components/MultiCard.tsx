import React from 'react';

export interface QuestionMultiData {
    service: string;
    options: string[];
    answer: string;
  }

interface MultiCardProps {
    questionData: QuestionMultiData;
}

const MultiCard: React.FC<MultiCardProps> = (props) => {
    const question = props.questionData;
    const choices = ['a', 'b', 'c', 'd'];
    const options = question.options.map((option, i) => (
      <li key={i}>{choices[i]}. {option}</li>
    ));
    const answerIndex = question.options.indexOf(question.answer);
    const answerLetter = choices[answerIndex];
  
    return (
      <>
        <div className="card-back">
          <div>{question.service}</div>
          <div className="multi-container">
            <ul className="multi">
              {options}
            </ul>
          </div>
        </div>
        <div className="card-front">
          {answerLetter}. {question.answer}
        </div>
      </>
    );
  }
  
  export default MultiCard;