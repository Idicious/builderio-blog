"use client";
import { FC } from "react";

type CardProps = {
  children: React.ReactNode;
  header: string;
};

const Card: FC<CardProps> = ({ children, header }) => {
  return (
    <div className="rounded p-4 bg-slate-200">
      <h3 className="text-lg font-bold">{header}</h3>
      {children}
    </div>
  );
};

export default Card;
