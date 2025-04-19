import React, { FC } from 'react';
import styles from './card.module.css';
import { CardType } from './card.enum';

interface CardProps {
  children: React.ReactNode;
  type?: CardType;
}

const Card: FC<CardProps> = ({ children, type = CardType.Primary }) => {
  const isCardSecondary = type === CardType.Secondary;
  const divStyle = isCardSecondary ? styles.cardsecondary : styles.card;

  return <div className={divStyle}>{children}</div>;
};

export default Card;
