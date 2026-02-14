import { FC, useState } from "react";
import { useNavigate } from "react-router";
import { useForm, Controller } from "react-hook-form";
import { Button } from "../Button";
import { InputField } from '../InputField'
import saderatImg from "../../assets/images/loginPBG.jpg";
import { auth } from '../../services/authService'
import useToast from '../../hooks/useToast'
import { helper } from "../../utils/helper";
import ToastContainer from "../Toast/ToastContainer";
const LoginPage: FC = ({

}) => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      username: "",
      password: ""
    },
  });
  const FormInput = ({
    name,
    label,
    type = "text",
    className = "",
    ...rest
  }) => (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <InputField
          label={label}
          type={type}
          className={className}
          value={value ?? ""}
          onChange={(e) => onChange(e.target?.value ?? e)}
          onBlur={onBlur}
          error={errors[name]?.message}
          {...rest}
        />
      )}
    />
  );
  const btnClick = async (data: any) => {
    helper.isDebug() &&
      console.log('LoginPage:InputData', data)

    if (!data.username || !data.password) {
      showToast({
        message: "ورود نام کاربری و رمز عبور الزامی می باشد.",
        severity: "error",
      });
      return;
    }
    const resp = await auth.login(data)
    helper.isDebug() &&
      console.log('LoginPage:resp', resp)
    if (resp.success) {
       helper.isDebug() &&
      console.log('btnClick:JSON.stringify(resp.data)', JSON.stringify(resp.data))
      helper.clientSet('appToken',JSON.stringify(resp.data))
      navigate("/");
    }
    else
      showToast({
        message: "اطلاعات نامعتبر می باشد.",
        severity: "error",
      });
      return;

  }
  return (
    <section className="h-[100vh] w-full bg-default flex justify-center items-center">
      <div className="flex rounded-lg border border-gray-200 overflow-hidden shadow-lg gap-8">
        <div className="flex flex-col justify-center items-center p-8">
          <FormInput name="username" label="نام کاربری" />
          <FormInput name="password" label="نام رمز عبور" type="password" />

          <Button className="mt-8" onClick={handleSubmit(btnClick)}>
            ورود به سامانه
          </Button>
        </div>
        <div>
          <img width={"500px"} src={saderatImg} />
        </div>
      </div>
       <ToastContainer />
    </section>
  );
};

export default LoginPage;
