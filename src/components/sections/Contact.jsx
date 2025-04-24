import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-black"
    >
      <RevealOnScroll>
        <div className="w-full max-w-4xl px-4">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all flex flex-col items-center">
              <div className="text-4xl text-blue-400 mb-4">
                <span className="icon-phone2"></span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Contact Number</h3>
              <a href="tel://0101010101" className="text-gray-300 hover:text-blue-300">
                6207891368
              </a>
            </div>
            {/* Email */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all flex flex-col items-center">
              <div className="text-4xl text-cyan-400 mb-4">
                <span className="icon-paper-plane"></span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Email Address</h3>
              <a href="mailto:conctact@domainname.com" className="text-gray-300 hover:text-blue-300">
              tasneemhasan1228@gmail.com</a>
            </div>
            {/* Resume */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all flex flex-col items-center">
              <div className="text-4xl text-green-400 mb-4">
                <span className="icon-globe"></span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Download Resume</h3>
              <a href="https://drive.google.com/file/d/1POExHcoq9wzuGG7t9NBcvgE2BIbVMUH7/view" className="text-gray-300 hover:text-blue-300 underline">
                Resume Link
              </a>
            </div>
          </div>
        </div>
        
      </RevealOnScroll>
    </section>
  );
};