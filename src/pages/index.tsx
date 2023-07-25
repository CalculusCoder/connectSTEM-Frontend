import Link from "next/link";

const Home = () => {
  return (
    <div>
      <nav className="flex gap-10">
        <Link href="/Signin">
          <button>Sign In</button>
        </Link>
        <Link href="/Register">
          <button>Register</button>
        </Link>
      </nav>
    </div>
  );
};

export default Home;
