import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {useLocation} from "react-router-dom";
import PesoJobs from "../projects/pesojobs/PesoJobs.jsx";
import Error from "../components/Error.jsx";

function Projects() {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const project = queryParams.get('project');
    let content;

    switch(project) {
        case 'pesojobs':
            content = <PesoJobs/>;
            break;
        default:
            content = <Error/>;
    }

    return (
        <>
            <title>Kiann - Projects</title>
            <Header back={true}/>
                {content}
            <Footer/>
        </>
    )
}

export default Projects
