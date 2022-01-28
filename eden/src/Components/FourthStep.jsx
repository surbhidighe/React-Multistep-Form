import React from "react";
import img from "../images/Tick.PNG";
import { Card } from "./Common/Card";
import { Heading } from "./Common/Heading";

function FourthStep({ formData, setFormData }) {
  return (
    <Card>
      <img src={img} alt="tick" className="tick" />

      <Heading
        title="Congratulations, Eren!"
        subtitle="You have completed onboarding. You can start using the Eden!"
      />
    </Card>
  );
}

export default FourthStep;
