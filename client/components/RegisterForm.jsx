const RegisterForm = ({ handleRegister, router }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="w-full h-full md:w-[470px] md:h-[800px] md:border-[2px] md:rounded-md md:p-8 md:box-content flex flex-col justify-center items-center gap-10">
      <div className="w-[90%]  h-[20px]">
        <img src="assets/devchallenges.svg" alt="devchallenges-logo" />
      </div>
      <div className="w-[90%] flex flex-col gap-5  ">
        <h1 className="text-xl font-[900]">
          Join thousands of learners from around the world{" "}
        </h1>
        <p className="text-sm">
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className=" w-[90%] h-[260px] flex flex-col gap-5"
      >
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-sm">Email</span>
          <input
            className="border border-[#BDBDBD] h-10 md:h-12 rounded-sm px-3 text-sm"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-semibold text-sm">Password</span>
          <input
            className="border border-[#BDBDBD] h-10 md:h-12 rounded-sm px-3 text-sm"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex flex-col">
          <input
            className="h-10 rounded-md bg-[#2F80ED] hover:bg-blue-300 text-white font-semibold cursor-pointer"
            type="submit"
            name="name"
            value="Start coding now"
            onClick={() => {
              router.push("/admin");
            }}
          />
        </div>
      </form>

      <div className=" w-[90%] flex flex-col items-center mb-32">
        <p className="mb-5">or continue with these social profile</p>
        <div className="flex justify-center gap-5 w-[70%] ">
          <img src="assets/Google.svg" alt="google-icon" />
          <img src="assets/Facebook.svg" alt="facebook-icon" />
          <img src="assets/Twitter.svg" alt="twitter-icon" />
          <img src="assets/Gihub.svg" alt="github-icon" />
        </div>
        <p className="mt-4">
          Aldready a member?{" "}
          <span
            className="text-blue-400 cursor-pointer"
            onClick={handleRegister}
          >
            login
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
