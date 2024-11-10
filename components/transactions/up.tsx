'use client';
import { RevealWrapper } from 'next-reveal';

export interface ITransaction {
  children: React.ReactNode;
  rotate?: {
    x: number;
    y: number;
    z: number;
  };
}

export const TransactionLeft = ({ children, rotate }: ITransaction) => {
  return (
    <RevealWrapper
      rotate={rotate}
      origin="left"
      delay={50}
      duration={2500}
      distance="50px"
      reset={true}
    >
      {children}
    </RevealWrapper>
  );
};

export const TransactionRight = ({ children, rotate }: ITransaction) => {
  return (
    <RevealWrapper
      rotate={rotate}
      origin="right"
      delay={50}
      duration={2500}
      distance="50px"
      reset={true}
    >
      {children}
    </RevealWrapper>
  );
};

export const TransactionTop = ({ children, rotate }: ITransaction) => {
  return (
    <RevealWrapper
      rotate={rotate}
      origin="top"
      delay={50}
      duration={2500}
      distance="50px"
      reset={true}
    >
      {children}
    </RevealWrapper>
  );
};

export const TransactionBottom = ({ children, rotate }: ITransaction) => {
  return (
    <RevealWrapper
      rotate={rotate}
      origin="bottom"
      delay={50}
      duration={2500}
      distance="50px"
      reset={true}
    >
      {children}
    </RevealWrapper>
  );
};
