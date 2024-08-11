import React, { useState, useCallback } from 'react'
import './App.css'
import { QuestionMultiData } from './components/MultiCard';
import { QuestionRegularData} from './components/RegularCard';
import { QuestionWeightData} from './components/RandomWeighted';
import QuizBar from './components/QuizBar.tsx';
import FlashCard from './components/FlashCard.tsx'

const FlashCardMemo = React.memo(FlashCard);

const App: React.FC = () => {
  const [cardStyle, setCardStyle] = useState<string>('Random');
  const [ready, setReady] = useState<boolean>(false);
  const [data, setData] = useState<QuestionRegularData | QuestionWeightData | QuestionMultiData | null>(null);
  const [flipClass, setFlipClass] = useState<string>('');
  
  const userChoice = useCallback((selectedCardStyle: string) => {
    setCardStyle(selectedCardStyle);
    setReady(false);
  }, []);

  const nowReady = useCallback((fetchedData: QuestionRegularData | QuestionWeightData | QuestionMultiData | null) => {
    const flip = flipClass === 'flip' ? 'new-card' : flipClass;
    setReady(true);
    setData(fetchedData);
    setFlipClass(flip);
  }, [flipClass]);

  const flip = useCallback(() => {
    const newFlipClass = flipClass === 'flip' ? '' : 'flip';
    setFlipClass(newFlipClass);
  }, [flipClass]);

  return (
    <div className="App align-items-center d-flex">
      <div className="container">
        <QuizBar userChoice={userChoice} />
        <FlashCardMemo
          cardStyle={cardStyle}
          nowReady={nowReady}
          ready={ready}
          data={data}
          flip={flip}
          flipClass={flipClass}
        />
      </div>
    </div>
  );
};

export default App;