import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:chahineboude@gmail.com?subject=${formData.subject}&email=${formData.email}&body=Hi, My name is ${formData.name}, ${formData.message}`;
  };

  return (
    <div className="h-screen relative flex overflow-hidden text-left flex-col md:flex-row max-w-7xl justify-center mx-auto items-center z-0">
      <h3 className="w-full  absolute top-20 text-4xl uppercase tracking-[25px] font-teko text-gray-300 text-center ">
        Contact
      </h3>
      <div className="flex flex-col space-y-10 font-PT tracking-widest items-center justify-center">
        {/* <h4 className="text-2xl 2xl:text-4xl font-semibold text-center">
          I'm the man for the occasion.{" "}
        </h4>*/}

        <div className="flex flex-col justify-center items-center space-y-5 md:mt-16 2xl:mt-0 2xl:space-y-10">
          <span className="sm:hidden 2xl:block text-2xl 2xl:text-4xl font-semibold text-center underline decoration-shade3/50 ">
            Get in touch.
          </span>
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="text-shade3 h-10 w-10 animate-pulse" />
            <p className="2xl:text-2xl">+213696783887</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="text-shade3 h-10 w-10 animate-pulse" />
            <p className="2xl:text-2xl">
              24 Rue Frères Berezouane, Alger, Algeria
            </p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="text-shade3 h-10 w-10 animate-pulse" />
            <p className="2xl:text-2xl">chahineboude@gmail.com</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="name"
              className="contactInput "
              type="text"
            />
            <input
              {...register("email")}
              placeholder="email"
              className="contactInput "
              type="text"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput "
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput "
          />
          <button type="submit" className="extraButton">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
