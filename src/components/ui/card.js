// src/components/ui/card.js
import React from "react";

const Card = ({ className, children }) => {
  return <div className={`card ${className}`}>{children}</div>;
};

const CardHeader = ({ children }) => {
  return <div className="card-header">{children}</div>;
};

const CardTitle = ({ className, children }) => {
  return <h3 className={`card-title ${className}`}>{children}</h3>;
};

const CardDescription = ({ className, children }) => {
  return <p className={`card-description ${className}`}>{children}</p>;
};

const CardContent = ({ children }) => {
  return <div className="card-content">{children}</div>;
};

export { Card, CardHeader, CardTitle, CardDescription, CardContent };
