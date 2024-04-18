import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./InvestmentCalculator.scss";
import InvestmentHeader from "../../layout/investmentHeader/InvestmentHeader";
import UserInputs from "../../components/userInput/UserInputs";
import Results from "../../components/results/Results";

export const InvestmentCalculator = () => {
  return (
    <div className="InvestmentCalculator">
      <Button component={Link} to="/">
        Back
      </Button>
      <InvestmentHeader />
      <UserInputs />
      <Results />
    </div>
  );
};
