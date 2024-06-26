import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-10 text-center text-lg font-semibold text-yellow-400 md:text-3xl">
      <h1 className="mb-8 text-stone-800">
        The best pizza.
        <br />
        <span className="text-yellow-400">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
