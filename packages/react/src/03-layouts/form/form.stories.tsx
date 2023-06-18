import {JInputControl} from "../../01-atoms/form-controls/input/input";
import {JSelectControl} from "../../01-atoms/form-controls/select/select";
import {JTextAreaControl} from "../../01-atoms/form-controls/textarea/textarea";
import {JButton} from "../../01-atoms/button/button";
import {JButtonGroup} from "../button-group/button-group";
import {JForm, JFormRow, JFormContent, JFormHeader} from "./form";
import {JContentSection} from "../content-section/content-section";


export default {
  title: "Layouts/Form",
  parameters: {
    status: {
      type: "experimental"
    }
  }
};

export function Default() {
  return (
    <JContentSection>
      <JForm className="j-form">
        <JFormHeader className="j-form__header">
          <h2>Contact Me</h2>
          <p>
            You can use this form to contact me. I will never share your details with anyone, for more info see my <a href="#">privacy policy</a>.<br/>
          </p>
        </JFormHeader>
        <JFormContent>
          <JFormRow>
            <JInputControl
              label="Name"
              placeholder="John Smith / johnsmith12"
              required={true}
            />
          </JFormRow>
          <JFormRow className="j-form__row">
            <JInputControl
              label="Email"
              required={true}
              placeholder="johnsmith12@example.com"
            />
          </JFormRow>
          <JFormRow>
            <JSelectControl
              label="Contact Reason"
              required={true}
              options={[
                {
                  text: "-- Select an Option --",
                  value: ""
                },
                {
                  text: "Project Feedback",
                  value: "feedback"
                },
                {
                  text: "Reporting a Security Vulnerability",
                  value: "security"
                },
                {
                  text: "Other",
                  value: "other"
                }
              ]}
            />
          </JFormRow>
          <JFormRow>
            <JSelectControl label="Releted Project (if applicable)"  options={[
              {
                text: "-- Select an Option --",
                value: ""
              },
              {
                text: "Athena",
                value: "athena"
              },
              {
                text: "Local-First Server",
                value: "local-first-server"
              },
              {
                text: "benryder.me",
                value: "benryder.me"
              }
            ]}/>
          </JFormRow>
          <JFormRow>
            <JTextAreaControl
              label="Message"
              rows={8}
              required={true}
              placeholder="Your message here..."
            />
          </JFormRow>
          <JFormRow>
            <JButtonGroup>
              <JButton type="submit">Submit</JButton>
            </JButtonGroup>
          </JFormRow>
        </JFormContent>
      </JForm>
    </JContentSection>
  )
}
