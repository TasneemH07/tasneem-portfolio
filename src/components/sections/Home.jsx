import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-cyan-300 to-blue-500 
          bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
          Hi, I&apos;m Tasneem Hasan
        </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I’m a frontend developer who builds clean, scalable UIs with modern frameworks—ensuring high performance and an intuitive, delightful user experience.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="relative inline-block py-3 px-6 font-medium text-blue-500 rounded z-10
                        transition-all duration-200 hover:-translate-y-0.5 group"
            >
              <span className="absolute inset-0 rounded-full border-2 border-transparent animate-border-spin "></span>
              <span className="relative z-10">Contact Me</span>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
