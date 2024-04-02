import image from "../assets/images/left-image.webp";

const Left = () => {
  return (
    <div className="flex-1 bg-[#191919] lg:flex hidden flex-col min-h-[90vh]">
      <div className="flex items-center flex-col justify-center h-full w-full relative">
        <h1 className="text-white text-[36px] mb-[35px] w-[366px] font-normal leading-[44px] text-center">
          Sign up <br /> and come on in
        </h1>
        <div>
          <picture className="">
            <img
              alt="Typeform product sample"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              role="presentation"
              src={image}
              className="max-w-[366px] w-full"
            />
          </picture>
        </div>
        <p className="absolute text-[14px] leading-[20px] bottom-[24px] text-white">
          © Typeform
        </p>
      </div>
    </div>
  );
};

export default Left;
