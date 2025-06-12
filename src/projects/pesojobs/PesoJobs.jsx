import ThreeDotsBorder from "../../components/ThreeDotsBorder.jsx";

const PesoJobs = () => {
    const images = import.meta.glob(
        './images/*.png', { eager: true }
    );

    const imageMap = Object.entries(images).reduce((acc, [path, module]) => {
        const filename = path.split('/').pop();
        acc[filename] = module.default || module;
        return acc;
    }, {});

    return (
        <>
            <section className="h-[65rem] lg:h-screen pt-20 bg-secondary text-white">

                <div className='lg:flex h-[90vh] lg:h-[83vh]'>
                    <div className="lg:w-1/4 lg:mb-auto mt-20 lg:mt-auto ms-20 xl:ms-40 me-20 lg:me-10 mb-10">
                        <img src={imageMap['peso.png']} alt="PESO Jobs Logo"
                        className={'size-40 xl:size-50 mb-13'}/>

                        <h2 className={'mb-6'}>PESO Jobs</h2>
                        <p>
                            A customized job portal developed for the Public Employment Service Office (PESO) of the
                            Municipality of General Mariano Alvarez (GMA), Cavite. Built with Laravel, the system is
                            designed to connect local job seekers with employers, and is already live and in use by the
                            Municipality.
                        </p>
                    </div>
                    <img src={imageMap['landing-page.png']} alt="PESO Jobs Landing Page"
                         className={'w-120 md:w-170 xl:w-200 2xl:w-250 mt-auto ms-auto me-auto lg:me-0 lg:mb-auto'}/>
                </div>

                <div className={'ms-10'}>
                    <ThreeDotsBorder />
                </div>
            </section>

            <section className="pt-25 pb-30 bg-primary text-white">
                <h2 className='text-center mb-20'>Users</h2>

                <div className={'lg:flex'}>
                    <div className="border-line-2 ml-auto mb-2 lg:hidden"></div>
                    <div className="border-line-1 lg:hidden"></div>

                    <div className="lg:ms-10 xl:ms-30 mt-20 lg:mt-0 me-10">
                        <img src={imageMap['admin-dashboard-1.png']} alt="Admin Dashboard"
                             className={'w-100 2xl:w-170 mx-auto lg:mx-0'}/>

                        <img src={imageMap['admin-dashboard-2.png']} alt="Admin Dashboard"
                             className={'w-100 2xl:w-170 mt-3 mx-auto lg:me-0 xl:ms-35'}/>
                    </div>

                    <div className="ms-auto my-auto">
                        <div className="border-line-3 ml-auto mb-2 hidden lg:block"></div>
                        <div className="border-line-2 hidden lg:block"></div>

                        <div className={'px-10 pt-20'}>
                            <div className={'flex'}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="size-8 my-auto me-2">
                                    <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125
                            7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472
                            0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5
                            0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0
                            0-1.5h-2.25V7.5Z" />
                                </svg>

                                <h4 className={'my-auto'}>Admin</h4>
                            </div>

                            <ul className="mt-5 list-disc ms-9 mb-20">
                                <li>Approve or disapprove employer registration</li>
                                <li>Approve or disapprove job postings submitted by employers</li>
                                <li>Easily generate the Monthly Reports required by DOLE</li>
                                <li>Monitor the status of all job applications</li>
                                <li>Monitor platform activity and system logs</li>
                            </ul>

                            <ThreeDotsBorder/>
                        </div>

                    </div>
                </div>

                <div className={'lg:flex mt-20 lg:mt-50'}>
                    <div className="my-auto">
                        <div className="border-line-2"></div>
                        <div className="border-line-3 mt-2"></div>

                        <div className={'px-10 pt-20'}>
                            <div className={'flex'}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="size-8 my-auto me-2">
                                    <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z" clipRule="evenodd" />
                                </svg>


                                <h4 className={'my-auto'}>Employer</h4>
                            </div>

                            <ul className="mt-5 list-disc ms-9 mb-20">
                                <li>Post job openings</li>
                                <li>View and shortlist applicants</li>
                                <li>Update the status of applications</li>
                                <li>Manage company profile</li>
                                <li>View announcements posted by PESO</li>
                            </ul>

                            <ThreeDotsBorder/>
                        </div>

                    </div>

                    <div className="lg:ms-auto xl:me-30 lg:me-10 mt-20 lg:mt-0">
                        <img src={imageMap['employer-dashboard.png']} alt="Employer Dashboard"
                             className={'w-100 2xl:w-170 lg:mx-0 mx-auto'}/>

                        <img src={imageMap['employer-job-offers.png']} alt="Employer Job Offers"
                             className={'w-100 2xl:w-170 mt-3 ms-auto me-auto lg:me-0 xl:ms-35'}/>
                    </div>
                </div>

                <div className={'lg:flex mt-20 lg:mt-50'}>
                    <div className="border-line-2 ml-auto mb-2 lg:hidden"></div>
                    <div className="border-line-1 lg:hidden"></div>

                    <div className="lg:ms-10 xl:ms-30 mt-20 lg:mt-0">
                        <img src={imageMap['applicant-joblist.png']} alt="Applicant Job Lists"
                             className={'w-100 2xl:w-170 mx-auto lg:mx-0'}/>

                        <img src={imageMap['applicant-jobs-applied.png']} alt="Applicant Jobs Applied"
                             className={'w-100 2xl:w-170 mt-3 ms-auto me-auto lg:me-0 xl:ms-35'}/>
                    </div>

                    <div className="ms-auto my-auto">
                        <div className="border-line-3 ml-auto mb-2 hidden lg:block"></div>
                        <div className="border-line-2 hidden lg:block"></div>

                        <div className={'px-10 pt-20'}>
                            <div className={'flex'}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="size-8 my-auto me-2">
                                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                                </svg>

                                <h4 className={'my-auto'}>Jobseekers</h4>
                            </div>

                            <ul className="mt-5 list-disc ms-9 mb-20">
                                <li>Register and build a profile</li>
                                <li>Search and apply for job opportunities</li>
                                <li>Track application status and history</li>
                                <li>View announcements posted by PESO</li>
                            </ul>

                            <ThreeDotsBorder/>
                        </div>

                    </div>
                </div>

            </section>
        </>
    );
}

export default PesoJobs;