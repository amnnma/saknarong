import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/navbar';


const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Navbar className="sticky top-0 w-full" />
      <main className="container mx-auto px-4 py-12 flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl w-full gap-8 mb-12">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-white text-4xl font-bold">Hello, I'm AUM 🎋</h1>
            <p className="text-white text-lg leading-relaxed">
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
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/aum.jpg"
              height={500}
              width={500}
              alt="Profile Picture"
              className="w-48 h-48 rounded-full border-4 border-blue-500 object-cover"
            />
          </div>
        </div>
        <div className="w-full max-w-4xl">
          <hr className="border-t border-gray-700" />
        </div>
      </main>
    </div>
  );
};

export default Home;