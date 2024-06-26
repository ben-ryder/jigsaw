import { JInput } from "../../01-atoms/forms/input/input";
import { JButton } from "../../01-atoms/button/button/button";
import { JForm, JFormRow, JFormContent, JFormHeader } from "./form";
import { JContentSection } from "../content-section/content-section";
import { JButtonGroup } from "../../03-organisms/button-group/button-group";

import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { JTextArea } from "../../01-atoms/forms/textarea/textarea";
import { JOptionData, JSelect } from "../../01-atoms/forms/select/select";
import { JCallout } from "../../02-components/callout/callout";
import { useState } from "react";
import {
  JMultiSelect,
  JMultiSelectOptionData,
} from "../../01-atoms/forms/multiselect/multiselect";

export default {
  title: "Layouts/Form",
  parameters: {
    status: {
      type: "experimental",
    },
  },
};

const FormFields = z
  .object({
    text: z
      .string({ required_error: "This field is required." })
      .min(1, "This field is required."),
    email: z
      .string({ required_error: "This field is required." })
      .min(1, "This field is required.")
      .email({ message: "Must be an email format" }),
    disabled: z.string({ required_error: "This field is required." }),
    textLong: z.string().optional(),
    // todo: can option values be typed and validated and do the select components support this?
    optionSingle: z
      .string({ required_error: "This field is required." })
      .min(1, "This field is required."),
    optionMulti: z.array(
      z.string({ required_error: "This field is required." }),
    ),
    // todo: add other input types like numbers, colours etc
  })
  .strict();
type FormFields = z.infer<typeof FormFields>;

const optionSingleOptions: JOptionData[] = [
  {
    text: "-- Select Option ---",
    value: "",
  },
  {
    text: "Option One",
    value: "1",
  },
  {
    text: "Option Two",
    value: "2",
  },
];

const multiSelectOptionData: JMultiSelectOptionData[] = [
  {
    text: "Option One",
    value: "1",
    variant: "green",
  },
  {
    text: "Option Two",
    value: "2",
  },
  {
    text: "Option Three",
    value: "3",
    variant: "blue",
  },
  {
    text: "Option Four",
    value: "4",
    variant: "red",
  },
];

export function Default() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    clearErrors,
    reset,
  } = useForm<FormFields>({
    resolver: zodResolver(FormFields),
    mode: "onTouched",
    defaultValues: {
      text: "",
      textLong: "",
      disabled: "a value",
      email: "",
      optionSingle: "",
      optionMulti: [],
    },
  });
  const [success, setSuccess] = useState<boolean>(false);

  const onSubmit = async (data: FormFields) => {
    clearErrors();

    if (!data.email.includes("@example.com")) {
      setError("root", {
        message:
          "The email address supplied is not an <something>@example.com address.",
      });
      return;
    }

    setSuccess(true);
    reset();
  };

  return (
    <JContentSection>
      <JForm className="j-form" onSubmit={handleSubmit(onSubmit)}>
        <JFormHeader className="j-form__header">
          <h2>Example Form</h2>
          <p>
            This is more than a basic Storybook example, this uses zod and
            react-hook-form to demonstrate a real working form to test and
            demonstrate the atoms in a real use case.
            <br />
          </p>
        </JFormHeader>
        <JFormContent>
          <JFormRow>
            {success && (
              <JCallout variant="success">
                Your submission has been submitted!
              </JCallout>
            )}
            {errors.root && (
              <JCallout variant="critical">{errors.root.message}</JCallout>
            )}
          </JFormRow>
          <JFormRow>
            <Controller
              name="text"
              control={control}
              render={({ field }) => (
                <JInput
                  label="Text"
                  placeholder="basic required text"
                  required={true}
                  {...field}
                  error={errors.text?.message as string}
                />
              )}
            />
          </JFormRow>
          <JFormRow>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <JInput
                  label="Email"
                  placeholder="hello@example.com"
                  required={true}
                  {...field}
                  error={errors.email?.message as string}
                  tooltip={{
                    content: <p>This data is never shared with anyone, and this is a very long piece of content.</p>,
                    preferredPosition: 'right'
                  }}
                />
              )}
            />
          </JFormRow>
          <JFormRow>
            <Controller
              name="disabled"
              control={control}
              render={({ field }) => (
                <JInput
                  label="Disabled"
                  placeholder="A disabled field..."
                  required={true}
                  disabled={true}
                  {...field}
                  error={errors.disabled?.message as string}
                />
              )}
            />
          </JFormRow>
          <JFormRow>
            <Controller
              name="textLong"
              control={control}
              render={({ field }) => (
                <JTextArea
                  label="Text Long"
                  placeholder="Enter some text here..."
                  rows={3}
                  {...field}
                  error={errors.textLong?.message as string}
                />
              )}
            />
          </JFormRow>
          <JFormRow>
            <Controller
              name="optionSingle"
              control={control}
              render={({ field }) => (
                <JSelect
                  label="Select Option"
                  required={true}
                  {...field}
                  options={optionSingleOptions}
                  error={errors.optionSingle?.message as string}
                />
              )}
            />
          </JFormRow>
          <JFormRow>
            <Controller
              name="optionMulti"
              control={control}
              render={({ field }) => (
                <JMultiSelect
                  id="optionMultiple"
                  label="Select Options"
                  options={multiSelectOptionData}
                  selectedOptions={field.value}
                  setSelectedOptions={field.onChange}
                  error={errors.optionSingle?.message as string}
                />
              )}
            />
          </JFormRow>
          <JFormRow>
            <JButtonGroup>
              <JButton type="submit" disabled={!isValid}>
                Submit
              </JButton>
            </JButtonGroup>
          </JFormRow>
        </JFormContent>
      </JForm>
    </JContentSection>
  );
}
