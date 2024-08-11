import React, { Component } from 'react';
import MultiCard, { QuestionMultiData } from './MultiCard';
import RegularCard, { QuestionRegularData} from './RegularCard';
import RandomWeighted, { QuestionWeightData} from './RandomWeighted';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faSpinner);

type DataProps = QuestionRegularData | QuestionWeightData | QuestionMultiData | null;

interface FlashCardProps {
  cardStyle: string;
  ready: boolean;
  flipClass: string;
  data: DataProps;
  flip: () => void;
  nowReady: (data: DataProps) => void;
}

class FlashCard extends Component<FlashCardProps> {
  private apiRoot = `https://aws-services.robertbunch.dev/services`;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  flip = (_e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    this.props.flip();
  };

  newCard = () => {
    //console.log(`Create new card ${this.props.cardStyle}`);
    let path = '';
    const cardStyle = this.props.cardStyle;
    switch (cardStyle) {
      case "Weighted":
        path = `${this.apiRoot}/weighted`;
        break;
      case "Multi":
        path = `${this.apiRoot}/multi`;
        break;
      default:
        path = `${this.apiRoot}/all`;
        break;
    }

    axios
      .get(path)
      .then((response) => {
        this.props.nowReady(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (!this.props.ready) {
      this.newCard();
      return (
        <div className="spinner-wrapper">
          <FontAwesomeIcon icon="spinner" size="6x" spin />
        </div>
      );
    }
    
    const cardStyle = this.props.cardStyle;
    let card;
    if (this.props.data != null) {
      switch (cardStyle) {
        case "Regular":
          card = <RegularCard questionData={this.props.data as QuestionRegularData} />;
          break;
        case "Multi":
          card = <MultiCard questionData={this.props.data as QuestionMultiData} />;
          break;
        default:
          card = <RandomWeighted questionData={this.props.data as QuestionWeightData} />;
          break;
      }
    }

    return (
      <>
        <div className="row align-items-center card-holder">
          <div onClick={this.flip} className={`col-sm-6 offset-sm-3 card mb-3 ${this.props.flipClass}`}>
            {card}
          </div>
        </div>
        <button onClick={this.newCard} className="btn btn-primary btn-lg">Next Question!</button>
      </>
    );
  }
}

export default FlashCard;
