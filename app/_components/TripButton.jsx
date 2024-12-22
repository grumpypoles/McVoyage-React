const TripButton = ({ variant, animated, children }) => {
  return (
    <button
      className={`
          relative inline-block text-uppercase no-underline mt-4 ml-20 py-6 px-16 
          rounded-full transition-all duration-200 ease-in-out text-lg font-semibold
          cursor-pointer border-none
          hover:-translate-y-1 hover:shadow-xl active:shadow-md focus:outline-none focus:ring-0
          ${variant === "white" ? "bg-white text-gray-700" : ""}
          ${variant === "green" ? "bg-green-600 text-slate-200" : ""}
          ${variant === "blue" ? "bg-blue-700 text-slate-200" : ""}
          ${variant === "accent" ? "bg-accent-800 text-slate-200" : ""}
          ${!["white", "green", "blue", "accent"].includes(variant) ? "bg-primary text-white" : ""}
          ${animated ? "animate-bounce" : ""}
          before:content-[''] before:block before:absolute before:top-0 before:left-0
          before:w-full before:h-full before:rounded-full before:transition-all before:duration-400
          before:z-[-1]
          hover:before:scale-110 hover:before:opacity-0
          ${variant === "white" ? "before:bg-white" : ""}
          ${variant === "green" ? "before:bg-green-600" : ""}
          ${variant === "blue" ? "bg-blue-700 text-slate-200" : ""}
          ${variant === "accent" ? "bg-accent-800 text-slate-200" : ""}
          ${!["white", "green", "blue",  "accent" ].includes(variant) ? "before:bg-primary" : ""}
        `}
    >
      {children}
    </button>
  );
};

export default TripButton;

