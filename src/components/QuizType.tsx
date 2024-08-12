import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faFont, faFileAlt, faDice } from '@fortawesome/free-solid-svg-icons';
import { library, IconDefinition  } from '@fortawesome/fontawesome-svg-core';

library.add(faDumbbell, faFont, faFileAlt, faDice);

interface QuizTypeProps {
  icon: IconDefinition;
  quizType: string;
  userChoice: (choice: string) => void;
}

const QuizType: React.FC<QuizTypeProps> = (props) => {
console.log(`Rendering QuizType: ${props.quizType}`);
  return (
    <li className="col-sm-3 text-center">
      <div className="nav-card" onClick={() => props.userChoice(props.quizType)}>
        <FontAwesomeIcon icon={props.icon} size="4x" />
        <span>{props.quizType}</span>
      </div>
    </li>
  );
}

export default React.memo(QuizType);
