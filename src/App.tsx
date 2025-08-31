import "./App.css";

function App() {
  return (
    //Outer div parent
    <div className="flex justify-center items-center gap-44 bg-[url('/images/green-img.jfif')] bg-no-repeat bg-cover w-full h-screen">
      {/* Left div */}
      <div className="flex flex-col space-y-7">
        <img src="/images/messi.jfif" className="rounded-full size-96" />

        {/* Icons div */}
        <div className="flex flex-row space-x-7 justify-center items-center">
          <img src="/icons/instagram.png" className="size-8 " />
          <img src="/icons/facebook.png" className="size-8" />
          <img src="/icons/twitter.png" className="size-8" />
        </div>
      </div>

      {/* Right div */}
      <div className="flex flex-col space-y-4 items-center justify-start mb-24">
        {/* Headings */}
        <div className="flex flex-col space-y-2 items-center justify-center">
          <p className="text-4xl text-white font-semibold">George Jere</p>
          <p className="text-lg text-white font-semibold">Web & mobile Dev</p>
        </div>

        <div className="space-y-8">
          <div className="border-2 border-white h-10 w-80">
            <p className="uppercase text-center mt-1">about me</p>
          </div>

          <div className="border-2 border-white h-10 w-80">
            <p className="uppercase text-center mt-1">lookbook</p>
          </div>

          <div className="border-2 border-white h-10 w-80">
            <p className="uppercase text-center mt-1">collaborations</p>
          </div>

          <div className="border-2 border-white h-10 w-80">
            <p className="uppercase text-center mt-1">work with me</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
