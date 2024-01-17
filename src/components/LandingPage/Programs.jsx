const Programs = () => {
  return (
    <div className="flex flex-col lg:flex-row text-fontPrimary my-4">
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center px-4">
        <div className="px-8 text-center">
          <h1 className="uppercase font-bold text-xl">Programs</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            tempora aut voluptatem magni eveniet hic repellat ratione nisi,
            minima sequi est veniam asperiores, at aperiam iusto amet
            repudiandae velit quo!
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center">
        <div className="px-4 py-6 grid grid-col-1 gap-8">
          <div className="rounded-md flex flex-col lg:flex-row bg-[#8265A7]">
            <div className="lg:w-2/5 w-full">
              <img className="w-full lg:rounded-l-lg rounded-t-lg h-full" src="./programs-1.png" alt="program-1" />
            </div>
            <div className="lg:w-3/5 w-full flex flex-col justify-center p-3">
              <h1 className="uppercase font-bold text-lg">Gamifikasi</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo enim iste perferendis nihil qui neque suscipit itaque ducimus exercitationem numquam cumque quas recusandae vero beatae, quo corrupti sed tenetur ullam.</p>
            </div>
          </div>
          <div className="rounded-md flex flex-col lg:flex-row bg-[#8265A7]">
            <div className="lg:w-2/5 w-full">
              <img className="w-full lg:rounded-l-lg rounded-t-lg h-full" src="./programs-2.png" alt="program-2" />
            </div>
            <div className="lg:w-3/5 w-full flex flex-col justify-center p-3">
              <h1 className="uppercase font-bold text-lg">Study Group</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo enim iste perferendis nihil qui neque suscipit itaque ducimus exercitationem numquam cumque quas recusandae vero beatae, quo corrupti sed tenetur ullam.</p>
            </div>
          </div>
          <div className="rounded-md flex flex-col lg:flex-row bg-[#8265A7]">
            <div className="lg:w-2/5 w-full">
              <img className="w-full lg:rounded-l-lg rounded-t-lg h-full" src="./programs-3.png" alt="program-3" />
            </div>
            <div className="lg:w-3/5 w-full flex flex-col justify-center p-3">
              <h1 className="uppercase font-bold text-lg">Problem Based Learning</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo enim iste perferendis nihil qui neque suscipit itaque ducimus exercitationem numquam cumque quas recusandae vero beatae, quo corrupti sed tenetur ullam.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
