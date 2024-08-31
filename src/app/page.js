import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/navbar';
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Navbar className="sticky top-0 w-full" />
      <main className="container mx-auto px-4 mt-8 flex flex-col items-center">
        <Marquee className="gap-[3rem] [--duration:5s]" fade={true}>
          <div className="text-lg text-blue-500">Under Development</div>
        </Marquee>
        <div className="flex flex-col md:flex-row items-center justify-between w-full mt-4">
          <div className="md:w-1/2">
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
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/aum.jpg"
              height={500}
              width={500}
              alt="Profile Picture"
              className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-blue-500 object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;