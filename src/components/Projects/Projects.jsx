import project1Url from "../../assets/images/p1.png";
import project2Url from "../../assets/images/p2.png";
import project3Url from "../../assets/images/p3.png";
// import project4Url from "../../assets/images/p4.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// document.addEventListener("DOMContentLoaded", () => {

//   gsap.ticket.lagSmoothing(0);

//   const services = gsap.utils.toArray(".project");

//   const observerOptions = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 0.1,
//   };

//   const observerCallback = (entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         const service = entry.target;
//         const imgContainer = service.querySelector(".img");

//         ScrollTrigger.create({
//           trigger: service,
//           start: "bottom bottom",
//           end: "top top",
//           scrub: true,
//           onUpdate: (self) => {
//             let progress = self.progress;
//             let newWidth = 30 + 70 * progress;
//             gsap.to(imgContainer, {
//               width: `${newWidth}%`,
//               duration: 0.1,
//               ease: "none",
//             });
//           },
//         });

//         ScrollTrigger.create({
//           trigger: service,
//           start: "top bottom",
//           end: "top top",
//           scrub: true,
//           onUpdate: (self) => {
//             let progress = self.progress;
//             let newHeight = 150 + 300 * progress;
//             gsap.to(service, {
//               height: `${newHeight}px`,
//               duration: 0.1,
//               ease: "none",
//             });
//           },
//         });

//         observer.unobserve(service);
//       }
//     });
//   };

//   const observer = new IntersectionObserver(observerCallback, observerOptions);

//   services.forEach((service) => {
//     observer.observe(service);
//   });
// });

const Projects = () => {

  
  return (
    <section className="flex flex-col px-8 py-16">
      <div className="flex w-full gap-16">
        <div className="flex-[2]"></div>
        <div className="flex-[5] p-4 text-4xl font-medium">
          <h1>All Projects</h1>
        </div>
      </div>

      <div className="project h-4/12 flex h-64 gap-8 border-t-2 border-brown">
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

      <div className="project h-4/12 flex h-64 gap-8 border-t-2 border-brown">
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

      <div className="project h-4/12 flex h-64 gap-8 border-t-2 border-brown">
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

      <div className="project h-4/12 flex h-64 gap-8 border-t-2 border-brown">
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
