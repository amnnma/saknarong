import Link from 'next/link';
import Navbar from '../components/navbar';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <main className="container mx-auto px-4 mt-8">
      <marquee behavior="scroll" direction="left" className="text-lg text-blue-500 mb-4">
         Under Development
        </marquee>

        <h1 className="text-white text-4xl font-bold mb-8">Hello, I'm AUM</h1>
        <p className="text-white text-lg leading-relaxed mb-8">
          Data Analyst at{' '}
          <Link href="https://sidata.plus" className="text-blue-500 underline">
          Sidata+
          </Link>{' '}
          <br />
          Volunteer Web Developer at{' '}
          <Link href="https://revivcommunity.org/" className="text-blue-500 underline">
          Reviv
          </Link>{' '}
          <br />
          Data is my lens, storytelling my voice, and together, I hope to make a world where people and the planet thrive.
        </p>
      </main>
    </div>
  );
};

export default Home;
