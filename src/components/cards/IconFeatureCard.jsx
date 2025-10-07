export default function IconFeatureCard(props) {
  const { icon, title, paragraph, className, children, colorMode } = props;

  // Definir classes de cor com base no modo

  const bgClassesIcon = {
    dark: "bg-primary",
    light: "bg-minititle",
    default: "bg-bgSectionDark",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-black",
  };

  const bgClass = bgClassesIcon[colorMode] || bgClassesIcon.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  return (
    <div
      className={`w-full tablet1:w-[290px] mt-[36px] tablet1:mt-0 desktop1:w-[200px] bg-white border rounded-lg p-4 flex flex-col items-center desktop1:hover:scale-110 transition  ${className}`}
    >
      <div
        className={`h-[64px] w-[64px] mb-[24px] rounded-md flex justify-center items-center text-white ${bgClass}`}
      >
        {icon}
      </div>
      <h1
        className={`h-auto font-bold font-mainFont text-title3 text-center mb-[16px] ${textClass}`}
      >
        {title}
      </h1>
      <p
        className={`text-center opacity-70 font-secondFont w-[90%]${textClass}`}
      >
        {paragraph}
      </p>
      {children}
    </div>
  );
}
