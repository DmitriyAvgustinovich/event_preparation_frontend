import { message } from "antd";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";

import { AND_VALIDATE_MESSAGE, DEFAULT_VALIDATE_MESSAGE } from "constants/general-constants";

export const getValidateErrorMessage = (formValues: ValidateErrorEntity) => {
  const notFilledFields = formValues.errorFields
    .map((errorField) => errorField.errors)
    .join(", ")
    .replace(new RegExp(DEFAULT_VALIDATE_MESSAGE, "g"), "")
    .replace(/,([^,]*)$/, ` ${AND_VALIDATE_MESSAGE}$1`);

  message.error(
    <>
      Заполните обязательные поля!
      <p>
        Осталось заполнить - <b>{notFilledFields}</b>
      </p>
    </>
  );
};
