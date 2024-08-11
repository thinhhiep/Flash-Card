import React from 'react';

export interface QuestionRegularData {
  service: string;
  desc: string;
  cat: string;
}

interface RegularCardProps {
  questionData: QuestionRegularData;
}

const RegularCard: React.FC<RegularCardProps> = (props) => {
  const question = props.questionData;
  return (
    <>
      <div className="card-back">
        {question.service}
      </div>
      <div className="card-front">
        <div>{question.desc}</div>
        <div>{question.cat}</div>
      </div>
    </>
  );
}

export default RegularCard;