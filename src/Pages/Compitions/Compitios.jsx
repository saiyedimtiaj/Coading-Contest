const Compitios = () => {
  return (
    <div className="my-10">
      <div className="flex items-center mx-auto container flex-col-reverse lg:flex-row gap-5 px-5">
        <div>
          <h1 className="text-5xl font-bold text-[#00CC99]">
            Isograd Testing Services
          </h1>
          <h1 className="text-2xl font-bold my-2">Coding Competitions</h1>
          <h1 className="text-lg font-bold max-w-md">
            10 years of experience, 100+ challenges organized 100,000
            participants.
          </h1>
          <div className="max-w-[520px] mt-6">
          <p className="text-gray-600">Our contest platform provides developers with an opportunity to challenge themselves, using familiar tools, within a secure and reliable environment.</p>
          <p className="mt-4">Unite your developers around challenging and engaging technology problems.</p>
          </div>
        </div>
        <img src="../assets/header_codingchalenges.png" alt="" />
      </div>
      <div className="bg-[#1D1D1B] py-14 text-[#FFFFF1]">
        <h1 className="text-3xl font-bold py-5 text-center">Why choose a coding competition ?</h1>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-5 px-5 mt-7">
            <div className="flex-1">
                <video className="w-80 h-80" controls >
                    <source src="../assets/whychallenge_en.mp4" />
                </video>
            </div>
            <div className="space-y-4 flex-1 max-w-md">
                <p>Coding competitions offer a unique, innovative opportunity to connect, engage, and communicate with developers, fostering a sense of community and excitement.</p>
                <h1 className="text-3xl font-bold text-[#00CC99]">Custom coding challenges</h1>
                <p>Our team collaborates with top technical experts to design coding challenges tailored to your unique needs. Whether you’re looking for a specific competition format, want to organize a contest around a new technology, or just want to reach a key target audience, we can create an immersive, engaging experience to align with your objectives.</p>
            </div>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col items-center lg:flex-row gap-5 px-5 pt-14">
            <div className="max-w-md space-y-4">
                <h1 className="text-3xl font-bold text-[#00CC99]">Engage your community of developers</h1>
                <p>To bring your teams together or energize your community, our range of challenge formats provides developers with an opportunity to engage in an original and stimulating experience, regardless of their skill level or preferred technology.</p>
                <h1 className="text-3xl font-bold text-[#00CC99]">Identify new talent</h1>
                <p>Coding competitions have the potential to attract a large number of participants, ranging from professionals to students, allowing you to scout new talent. By organizing a competition, you can assess the technical skills of the participants and identify top talent.</p>
                <h1 className="text-3xl font-bold text-[#00CC99]">Boost your employer brand</h1>
                <p>Coding competitions serve as a valuable platform to communicate your company's values both internally and externally, thanks to their innovative format. They provide an opportunity to showcase your organization's core principles, beliefs, and culture.</p>
            </div>
            <div className="w-full lg:w-1/2">
            <img className="" src="../assets/whycontest.png" alt="" />
            </div>
        </div>
      </div>
      <div className="bg-[#00CC99]">
        <div className="mx-auto max-w-5xl px-5">
            <img src="../assets/slider-3.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Compitios;
