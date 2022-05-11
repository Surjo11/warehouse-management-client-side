import React from "react";
import { useForm } from "react-hook-form";
const Question = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="mb-20 p-3 flex-wrap lg:w-4/5 h-96 mx-auto flex justify-around items-center bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="lg:mt-10">
        <span className="text-4xl font-semibold">Have you any Questions?</span>
        <br />
        <p className="lg:mt-5">
          Feel free to ask if you guys have any question. <br /> We are open to
          questions and will reply as soon as possible.
        </p>
      </div>
      <div className="lg:w-1/4 mt-10">
        {" "}
        <form className="lg:flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="mb-2 rounded-lg"
            placeholder="Enter your name"
            type="text"
            {...register("name", { required: true, maxLength: 20 })}
          />
          <input
            className="mb-2 rounded-lg"
            placeholder="Enter email"
            type="email"
            {...register("email")}
          />
          <textarea
            className="rounded-lg"
            placeholder="Your Question"
            type="text"
            {...register("question")}
          />
          <button
            type="submit"
            className="flex justify-center items-center h-10 lg:h-12 m-3 w-full mx-auto text-white bg-violet-600 hover:bg-violet-500 font-medium rounded-lg text-sm"
          >
            Send it
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Question;
