const Programs = () => {
  return (
    <div className="h-screen">
      <h1 className="text-center text-2xl font-bold">Programs</h1>
      <div className="grid grid-cols-3 gap-2 p-4 my-4">
        <div className="bg-gray-200 p-4">
          <div className="flex flex-col justify-center items-center">
            <img
              className="rounded-full "
              src="https://via.placeholder.com/150"
              alt="placeholder"
            />
            <h2 className="text-center text-xl font-bold">Program 1</h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </p>
          </div>
        </div>
        <div className="bg-gray-200 p-4">
          <div className="flex flex-col justify-center items-center">
            <img
              className="rounded-full "
              src="https://via.placeholder.com/150"
              alt="placeholder"
            />
            <h2 className="text-center text-xl font-bold">Program 1</h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </p>
          </div>
        </div>
        <div className="bg-gray-200 p-4">
          <div className="flex flex-col justify-center items-center">
            <img
              className="rounded-full "
              src="https://via.placeholder.com/150"
              alt="placeholder"
            />
            <h2 className="text-center text-xl font-bold">Program 1</h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-2 grid-flow-col gap-2 p-4 my-4">
        <div className="bg-gray-200 p-4">
          <h2 className="text-center text-xl font-bold">Program 1</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
        </div>
        <div className="bg-gray-200 p-4">
          <h2 className="text-center text-xl font-bold">Program 2</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
        </div>
        <div className="bg-gray-200 p-4">
          <h2 className="text-center text-xl font-bold">Program 3</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
        </div>
        <div className="bg-gray-200 p-4">
          <h2 className="text-center text-xl font-bold">Program 4</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
        </div>
        <div className="bg-gray-200 p-4 row-span-2">
          <h2 className="text-center text-xl font-bold">Program 5</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
