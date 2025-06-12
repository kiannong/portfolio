import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import me from '../assets/images/me.png';
import ThreeDotsBorder from "../components/ThreeDotsBorder.jsx";
import SkillTree from "../components/SkillTree.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import PesoJobsLandingPage from "../projects/pesojobs/images/landing-page.png";

function App() {

  return (
    <>
        <Header />
        <section className='pt-30 md:pt-20 bg-secondary md:h-[60vh] lg:h-[75vh] xl:h-screen block md:flex text-white'>
            <div className='md:w-[70vw] xl:w-[60vw] mx-10 md:mx-0 text-center md:text-left'>
                <div className="flex px-10 xl:px-30 md:h-[40vh] lg:h-[55vh] xl:h-[80vh]">
                    <div className='m-auto'>
                        <h5 className='mb-7 xl:mb-10 text-sm lg:text-lg xl:text-xl'>Hi there! I'm</h5>
                        <h1 className='xl:mb-5 mb-3 text-3xl lg:text-4xl xl:text-5xl'>
                            KIMBERLY ANN ONG,
                        </h1>
                        <h2 className='mb-1 lg:mb-2 text-xl lg:text-2xl xl:text-4xl'>
                            a Web Developer based in
                        </h2>
                        <h2 className='mb-10 xl:mb-15 text-xl lg:text-2xl xl:text-4xl'>
                            Cavite, Philippines.
                        </h2>
                        <p>
                            I craft dynamic websites and web systems using PHP (Laravel) -
                            turning ideas into functional, and user-friendly digital experiences.
                        </p>
                    </div>
                </div>

                <div className='hidden md:flex h-[10vh]'>
                    <div className="mt-auto mb-8 ps-10">
                        <ThreeDotsBorder />
                    </div>
                </div>
            </div>
            <img src={me} alt="Kiann" className='mt-10 md:mt-auto h-[40vh] lg:h-[50vh] xl:h-[65vh] mx-auto'/>
        </section>

        <section className="bg-primary py-20 text-white">
            <h3 className='uppercase text-center mb-20'>my skills</h3>

            <SkillTree />
        </section>

        <section className="bg-secondary pt-20 pb-50 text-white">
            <h3 className='uppercase text-center mb-20'>my projects</h3>

            <div className='flex justify-center mx-5'>
                <ProjectCard image={PesoJobsLandingPage} projectName={'PESO Jobs'} projectUrl={'pesojobs'}
                 desc={
                     'A job search application for the residence of General Mariano Alvarez, Cavite ' +
                     'under Public Employment Service Office. Made in Laravel 11.'
                 }/>
            </div>
        </section>

        <Footer />
    </>
  )
}

export default App
