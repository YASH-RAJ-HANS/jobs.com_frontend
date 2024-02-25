export default function Offer() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className=" mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            What We <span className="text-[#6B39C1]">Offer</span>{" "}
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            The Jobs Harbour is the right platform for you to get serious job{" "}
            <br />
            recommendations, get career counseling, and find your ideal job
            profile.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              alt="Job Recommendation"
              className="w-full h-auto object-cover rounded-md"
              height="200"
              src="https://img.freepik.com/free-vector/man-search-hiring-job-online-from-laptop_1150-52728.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="flex items-center mt-4">
              <div className="text-lg font-semibold text-gray-700">01</div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Job Recommendation
                </h3>
                <p className="text-gray-500">
                  Get job preferences and get noticed by our list of job
                  recommendations.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              alt="Create & Build Profile"
              className="w-full h-auto object-cover rounded-md"
              height="200"
              src="https://img.freepik.com/free-vector/profile-interface-concept-illustration_114360-2850.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="flex items-center mt-4">
              <div className="text-lg font-semibold text-gray-700">02</div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Create & Build Profile
                </h3>
                <p className="text-gray-500">
                  Create a profile that stands out and showcases your skills and
                  experience.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              alt="Career Consultation"
              className="w-full h-auto object-cover rounded-md"
              height="200"
              src="https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="flex items-center mt-4">
              <div className="text-lg font-semibold text-gray-700">03</div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Career Consultation
                </h3>
                <p className="text-gray-500">
                  Get expert advice and guidance to steer your career in the
                  right direction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
