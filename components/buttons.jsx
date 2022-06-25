import Link from "next/link";

export const AButton = ({ txt, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="mr-4 inline-block mb-4"
    >
      <div className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-orange-500 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-orange-300 hover:ring-offset-orange-200 ring-offset-orange-500 ease focus:outline-none">
        <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-0 bg-white group-hover:translate-x-1 opacity-10" />
        <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 translate-x-0 bg-white group-hover:-translate-x-1 opacity-10" />
        <span className="relative z-20 flex items-center text-sm">
          <svg
            className="relative w-5 h-5 mr-2 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          {txt}
        </span>
      </div>
    </a>
  );
};

export const LinkButton = ({ txt, href }) => {
  return (
    <Link href={href} target="_blank" rel="noreferrer noopener">
      <div className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-orange-500 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-orange-300 hover:ring-offset-orange-200 ring-offset-orange-500 ease focus:outline-none">
        <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-0 bg-white group-hover:translate-x-1 opacity-10" />
        <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 translate-x-0 bg-white group-hover:-translate-x-1 opacity-10" />
        <span className="relative z-20 flex items-center text-sm">
          <svg
            className="relative w-5 h-5 mr-2 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          {txt}
        </span>
      </div>
    </Link>
  );
};
