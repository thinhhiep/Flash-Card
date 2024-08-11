import React from 'react';
import QuizType from './QuizType';
import { faDice, faFileAlt, faDumbbell, faFont } from '@fortawesome/free-solid-svg-icons';

interface QuizBarProps {
  userChoice: (choice: string) => void;
}

const QuizBar: React.FC<QuizBarProps> = (props) => {
  const quizArray = [
    { icon: faDice, type: "Random" },
    { icon: faFileAlt, type: "Regular" },
    { icon: faDumbbell, type: "Weighted" },
    { icon: faFont, type: "Multi" }
  ];

  const quizTypes = quizArray.map((qt, i) => (
    <QuizType key={i} icon={qt.icon} quizType={qt.type} userChoice={props.userChoice} />
  ));

  return (
    <div className="quiz-bar">
      <h1>Choose your study type</h1>
      <ul className="nav nav-pills nav-fill">
        {quizTypes}
      </ul>
    </div>
  );
}

export default QuizBar;
