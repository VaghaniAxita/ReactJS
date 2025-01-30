import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
const validation = z.object({
  name: z.string().min(2, "min 2 characters").max(25, "max 25 characters"),
  email: z.string().email(),
  password: z
    .string()
    .min(6, "min 6 characters")
    .regex(/[a-z]/, "small character required")
    .regex(/[A-Z]/, "large character required")
    .regex(/[@%&_?$]/, "single special character required"),
});

const UserForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validation),
    mode: "onChange",
  });

  const createUser = async ({ name, email, password }) => {
    let res = await axios.post("http://localhost:8090/api/v1/users/signup", {
      username: name,
      email: email,
      password: password,
    });
    console.log(res);
  };

  const onSubmit = (data) => {
    if (data) {
      createUser(data);
    }
  };
  let value = watch();

  const getBorder = (name) => {
    if (errors[name]) {
      return "1px solid red";
    } else if (value[name] && !errors[name]) {
      return "1px solid green";
    } else {
      return "1px solid black";
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">name</label>
        <input
          type="text"
          {...register("name")}
          style={{ border: getBorder("name") }}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <br />
        <label>email: </label>
        <input type="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
        <br />
        <label htmlFor="">password</label>
        <input type="text" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default UserForm;