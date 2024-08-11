import React from 'react';

export interface QuestionWeightData {
    service: string;
    common: string;
    cat: string;
}

interface RandomWeightedProps {
  questionData: QuestionWeightData
}

const RandomWeighted: React.FC<RandomWeightedProps> = (props) => {
  const question = props.questionData;
  return (
    <>
      <div className="card-back">
        <div>{question.service}</div>
        <div className="commonality">{question.common}</div>
      </div>
      <div className="card-front">
        <div>{question.cat}</div>
      </div>
    </>
  );
}

export default RandomWeighted;
