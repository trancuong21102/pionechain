import { TokenComp } from "./ui/TokenComp";

export const TokenSection = () => {
  return (
    <div className="relative w-full ">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_45px] "></div>

      <div className=" py-40">
        <TokenComp />
      </div>
    </div>
  );
};
