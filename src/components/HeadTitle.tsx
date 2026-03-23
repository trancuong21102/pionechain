interface headProps {
  title: string;
  subTitle: string;
}

export const HeadTitle = ({ title, subTitle }: headProps) => {
  return (
    <div className="flex flex-col justify-center w-full items-center gap-3">
      <div className="flex flex-col items-center gap-3 max-w-3xl">
        <h1 className="sm:text-5xl text-center text-4xl text-white">{title}</h1>
        <p className="text-lg text-gray-400 text-center">{subTitle}</p>
      </div>
    </div>
  );
};
