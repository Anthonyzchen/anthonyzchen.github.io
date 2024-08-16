import project1Url from "../../assets/images/p1.png";
import project2Url from "../../assets/images/p2.png";
import project3Url from "../../assets/images/p3.png";
// import project4Url from "../../assets/images/p4.png";

const Projects = () => {
  return (
    <section className="flex flex-col px-8 py-16">
      <div className="flex w-full gap-16">
        <div className="flex-[2]"></div>
        <div className="flex-[5] p-4 text-4xl font-medium">
          <h1>All Projects</h1>
        </div>
      </div>

      <div className="h-4/12 flex h-64 gap-8 border-t-2 border-brown">
        <div className="flex h-full w-full flex-[2] flex-col p-4">
          <h1 className="text-4xl font-medium">Project 1</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
            odio.
          </p>
        </div>
        <div className="h-full w-full flex-[5] p-4">
          <img
            className="h-full w-4/12 overflow-hidden rounded-lg object-cover"
            src={project1Url}
            alt="project1"
          />
        </div>
      </div>

      <div className="h-4/12 flex h-64 gap-8 border-t-2 border-brown">
        <div className="flex h-full w-full flex-[2] flex-col p-4">
          <h1 className="text-4xl font-medium">Project 2</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
            odio.
          </p>
        </div>
        <div className="h-full w-full flex-[5] p-4">
          <img
            className="h-full w-4/12 overflow-hidden rounded-lg object-cover"
            src={project2Url}
            alt="project2"
          />
        </div>
      </div>

      <div className="h-4/12 flex h-64 gap-8 border-t-2 border-brown">
        <div className="flex h-full w-full flex-[2] flex-col p-4">
          <h1 className="text-4xl font-medium">Project 3</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
            odio.
          </p>
        </div>
        <div className="h-full w-full flex-[5] p-4">
          <img
            className="h-full w-4/12 overflow-hidden rounded-lg object-cover"
            src={project3Url}
            alt="project3"
          />
        </div>
      </div>

      <div className="h-4/12 flex h-64 gap-8 border-t-2 border-brown">
        <div className="flex h-full w-full flex-[2] flex-col p-4">
          <h1 className="text-4xl font-medium">Project 4</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
            odio.
          </p>
        </div>
        <div className="h-full w-full flex-[5] p-4">
          <img
            className="h-full w-4/12 overflow-hidden rounded-lg object-cover"
            src={project1Url}
            alt="project4"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
