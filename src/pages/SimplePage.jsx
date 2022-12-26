import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

const SimplePage = () => {
  const [data, setData] = useState([
    {
      remark: 1,
      type: "mobile",
      value: "1234567890",
    },
    {
      remark: 2,
      type: "phone",
      value: "0987654321",
    },
    {
      remark: 3,
      type: "email",
      value: "someone@gmail.com",
    },
  ]);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      data: data,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const { fields, prepend, append } = useFieldArray({ name: "data", control });

  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
      {fields.map((data, index) => (
        <div className="app" key={index}>
          <div className="fieldWrapper">
            <label htmlFor="type">Type</label>
            <input value={data?.type} type="text" readOnly />
          </div>
          <div className="fieldWrapper">
            <label htmlFor="value">Value</label>
            <input
              name={data?.type}
              {...register(`${data.type}`)}
              defaultValue={data?.value}
              type="text"
            />
          </div>
          <div className="fieldWrapper">
            <label htmlFor="remark">Remark</label>
            <input type="text" value={"none"} readOnly />
          </div>
        </div>
      ))}
      <div className="fieldWrapper">
        <button type="submit">Edit</button>
      </div>
    </form>
  );
};

export default SimplePage;
