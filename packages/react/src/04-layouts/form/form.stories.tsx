import { JInput } from "../../01-atoms/forms/input/input";
import { JSelectControl } from "../../01-atoms/forms/select/select";
import { JTextAreaControl } from "../../01-atoms/forms/textarea/textarea";
import { JButton } from "../../01-atoms/button/button";
import { JForm, JFormRow, JFormContent, JFormHeader } from "./form";
import { JContentSection } from "../content-section/content-section";
import { JButtonGroup } from "../../03-organisms/button-group/button-group";

import z from "zod"
import {Controller, useForm, Control} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import {zodResolver} from "@hookform/resolvers/zod";

export default {
  title: "Layouts/Form",
  parameters: {
    status: {
      type: "experimental",
    },
  },
};

const FormFields = z.object({
  text: z
    .string({required_error: "This field is required."}),
  email: z
    .string({required_error: "This field is required."})
    .email({message: "Must be an email format"}),
  textLong: z.string({required_error: "This field is required."}),
  optionSingle: z.string({required_error: "This field is required."}),
  optionMulti: z.array(z.string({required_error: "This field is required."}))
}).strict()
type FormFields = z.infer<typeof FormFields>;

export function Default() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(FormFields),
    mode: "onTouched"
  })
  const onSubmit = (data) => console.log(data)

  return (
    <JContentSection>
      <JForm className="j-form" onSubmit={handleSubmit(onSubmit)}>
        <JFormHeader className="j-form__header">
          <h2>Contact Me</h2>
          <p>
            This is more than a basic Storybook example, this uses zod and react-hook-form
            to demonstrate a real working form.
            <br />
          </p>
        </JFormHeader>
        <JFormContent>
          <JFormRow>
            <Controller
              name="text"
              control={control}
              render={({ field }) =>
                <JInput
                  label="Text"
                  placeholder="basic required text"
                  required={true}
                  {...field}
                  error={errors.text?.message}
                />
              }
            />
          </JFormRow>
          <JFormRow>
            <Controller
              name="email"
              control={control}
              render={({ field }) =>
                <JInput
                  label="Email"
                  placeholder="hello@example.com"
                  required={true}
                  {...field}
                  error={errors.email?.message}
                />
              }
            />
          </JFormRow>
          {/*<JFormRow>*/}
          {/*  <JSelectControl*/}
          {/*    id="reason"*/}
          {/*    label="Contact Reason"*/}
          {/*    options={[*/}
          {/*      {*/}
          {/*        text: "-- Select an Option --",*/}
          {/*        value: "",*/}
          {/*      },*/}
          {/*      {*/}
          {/*        text: "Project Feedback",*/}
          {/*        value: "feedback",*/}
          {/*      },*/}
          {/*      {*/}
          {/*        text: "Reporting a Security Vulnerability",*/}
          {/*        value: "security",*/}
          {/*      },*/}
          {/*      {*/}
          {/*        text: "Other",*/}
          {/*        value: "other",*/}
          {/*      },*/}
          {/*    ]}*/}
          {/*  />*/}
          {/*</JFormRow>*/}
          {/*<JFormRow>*/}
          {/*  <JSelectControl*/}
          {/*    id="related-projects"*/}
          {/*    label="Releted Project (if applicable)"*/}
          {/*    options={[*/}
          {/*      {*/}
          {/*        text: "-- Select an Option --",*/}
          {/*        value: "",*/}
          {/*      },*/}
          {/*      {*/}
          {/*        text: "Athena",*/}
          {/*        value: "athena",*/}
          {/*      },*/}
          {/*      {*/}
          {/*        text: "Local-First Server",*/}
          {/*        value: "local-first-server",*/}
          {/*      },*/}
          {/*      {*/}
          {/*        text: "benryder.me",*/}
          {/*        value: "benryder.me",*/}
          {/*      },*/}
          {/*    ]}*/}
          {/*  />*/}
          {/*</JFormRow>*/}
          {/*<JFormRow>*/}
          {/*  <JTextAreaControl*/}
          {/*    label="Message"*/}
          {/*    rows={8}*/}
          {/*    required={true}*/}
          {/*    placeholder="Your message here..."*/}
          {/*  />*/}
          {/*</JFormRow>*/}
          <JFormRow>
            <JButtonGroup>
              <JButton type="submit">Submit</JButton>
            </JButtonGroup>
          </JFormRow>
        </JFormContent>
      </JForm>
    </JContentSection>
  );
}
