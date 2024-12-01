
import React from 'react'
import Image from 'next/image';
import  image from "../../public/assests/image.jpg"
import Link from 'next/link';

export const Hero = () => {
  
  return (
  <div >
    <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image bg-slate-300">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I am
            <br className="hidden lg:inline-block" />
            Web Developer
          </h1>
          <div className='w-[100px] h-[2px] bg-blue-700' >
            
          </div>
          <p className="mb-8 leading-relaxed">
          I am a passionate Web Developer with a strong foundation in HTML, CSS, JavaScript, and TypeScript. I specialize in building dynamic, responsive web applications using React and Next.js,  I have successfully developed my own portfolio website using Next.js and Tailwind CSS, which showcases my abilities in creating modern and performance-optimized user interfaces. I am eager to continue growing my skills and take on more challenging projects. I would love to share my work with you and contribute to your team’s succes
          </p>
          <div className="flex justify-center">
           <Link href={"#Contact"}>
            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Contact
            </button>
            </Link>
          </div>
        </div>
        <div className="mr-14 w-[20rem]">
        <Image src={  image  } alt="hero" width={400} height={400}  />
        </div>
      </div>
    </section>
  </div>

  );
}
export default Hero