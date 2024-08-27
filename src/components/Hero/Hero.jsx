import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="flex h-screen w-full flex-col items-center justify-center bg-painting bg-cover bg-center px-8">
        <h1 className="text-4xl font-bold">Anthony Chen</h1>
        <h2 className="mt-3 text-lg font-medium">CS + Finance at Northeastern University</h2>
        <p className="mt-4 max-w-xs leading-normal">i'm passionate about creating accessible, aesthetic, and reliable solutions through software engineering.</p>
      </div>
    </section>
  );
};
export default Hero;
