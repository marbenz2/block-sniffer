import { ReactNode } from "react";

interface AreaProps {
  children: ReactNode;
}

const Area = ({ children }: AreaProps) => {
  return (
    <section className="min-w-1/2 w-full h-auto justify-center flex flex-wrap p-2 gap-2 bg-neutral-600 text-white rounded-xl shadow-lg">
      {children}
    </section>
  );
};

export default Area;
