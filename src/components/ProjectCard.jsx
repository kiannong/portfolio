import TertiaryButton from "./TertiaryButton.jsx";

const ProjectCard = ({image, projectName, projectUrl, desc}) => {
    return (
        <div className='bg-primary rounded-xl px-10 py-15 w-120'>
            <img src={image} alt={`${projectName} Landing Page`}/>

            <h5 className='text-white mt-5'>{projectName}</h5>
            <p className='text-white mt-3'>{desc}</p>

            <a href={`/projects?project=${projectUrl}`}>
                <TertiaryButton className='mt-15 px-7'>
                    See more
                </TertiaryButton>
            </a>

        </div>
    );
}

export default ProjectCard;