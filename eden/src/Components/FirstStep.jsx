import React from "react";
import { Card } from "./Common/Card";
import { Heading } from "./Common/Heading";
import { InputField } from "./Common/InputField";

function FirstStep({ formData, setFormData }) {
  return (
    <Card>
      <Heading
        title="Welcome! First things first..."
        subtitle="You can always change them later."
      />

      <label htmlFor="fullName" className="label1">
        Full Name
      </label>
      <InputField
        type="text"
        placeholder="Steve Jobs"
        value={formData.fullName}
        onChange={(e) => {
          setFormData({ ...formData, fullName: e.target.value });
        }}
      />

      <label htmlFor="displayName" className="label1">
        Display Name
      </label>
      <InputField
        type="text"
        placeholder="Steve"
        value={formData.displayName}
        onChange={(e) => {
          setFormData({ ...formData, displayName: e.target.value });
        }}
      />
    </Card>
  );
}

export default FirstStep;
