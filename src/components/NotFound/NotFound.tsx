import { FC } from "react";
import { useNavigate } from "react-router";
import { INotFoundProps } from "./NotFound.type";

const NotFound: FC<INotFoundProps> = ({
    title = "404",
    Content='صفحه مورد نظر پیدا نشد!'
}) => {
    const navigate = useNavigate();
  return (
     <div className="flex bg-default items-center justify-center h-[100vh]">
      <div className="container px-6 py-16 text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-9xl font-bold text-primary-2 mb-4">{title}</h1>
          <p className="text-2xl md:text-3xl font-medium text-primary mb-8">
          {Content}  
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white  rounded-lg  transition"
            >
              بازگشت
            </button>

            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 px-6 py-3 bg-white text-primary-600 border border-primary-600 rounded-lg  transition"
            >
              صفحه اصلی
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
