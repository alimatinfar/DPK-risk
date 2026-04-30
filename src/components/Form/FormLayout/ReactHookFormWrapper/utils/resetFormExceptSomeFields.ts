import type {ReactHookFormWrapperProps} from "../ReactHookFormWrapper.tsx";

type Props = {
  formMethods: ReactHookFormWrapperProps['formMethods']
  fields: string[];
}

function resetFormExceptSomeFields(
  {fields, formMethods}: Props
) {
  const values = formMethods.getValues();

  const keptValues = fields.reduce((acc: any, field) => {
    acc[field] = values[field];
    return acc;
  }, {});

  formMethods.reset(keptValues);
}

export default resetFormExceptSomeFields;