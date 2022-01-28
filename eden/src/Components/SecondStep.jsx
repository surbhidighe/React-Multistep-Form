import React from "react";
import { Card } from "./Common/Card";
import { Heading } from "./Common/Heading";
import { InputField } from "./Common/InputField";

function SecondStep({ formData, setFormData }) {
  return (
    <Card>
      <Heading
        title="Let's setup a home for all your work"
        subtitle="You can always create another workspace later."
      />

      <label htmlFor="wName" className="label1">
        Workspace Name
      </label>
      <InputField
        type="text"
        placeholder="Eden"
        value={formData.wName}
        onChange={(event) =>
          setFormData({ ...formData, wName: event.target.value })
        }
      />

      <label htmlFor="wUrl" className="label1">
        Workspace url (optional)
      </label>
      <InputField
        type="url"
        placeholder="Example"
        value={formData.wUrl}
        onChange={(event) =>
          setFormData({ ...formData, wUrl: event.target.value })
        }
      />
    </Card>
  );
}

export default SecondStep;
