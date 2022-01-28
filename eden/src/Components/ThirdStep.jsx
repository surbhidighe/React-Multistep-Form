import React from "react";
import { Card } from "./Common/Card";
import { Heading } from "./Common/Heading";

function ThirdStep({ formData, setFormData }) {
  return (
    <Card>
      <Heading
        title="How are you planning to use Eden?"
        subtitle="We'll streamline your setup experience accordingly.."
      />
      <div className="option_div">
        <label class="labl">
          <input
            type="radio"
            name="radioname"
            value={formData.mySelf}
            checked="checked"
            onChange={(event) =>
              setFormData({ ...formData, mySelf: event.target.value })
            }
          />
          <div>
            <i class="fa fa-user"></i>
            <h5>For Myself</h5>
            <p>Write better, think more clearly, stay organized </p>
          </div>
        </label>
        <br />
        <label class="labl">
          <input
            type="radio"
            name="radioname"
            value={formData.team}
            onChange={(event) =>
              setFormData({ ...formData, team: event.target.value })
            }
          />
          <div>
            <i class="fa fa-group"></i>
            <h5>With my Team</h5>
            <p>wikis, docs, tasks and projects, all in one place</p>
          </div>
        </label>
      </div>
    </Card>
  );
}

export default ThirdStep;
