import logo from "../assets/images/my-icon.png";
import PrimaryButton from "./PrimaryButton.jsx";

const header = ({back = false}) => {
    return (
        <header className='bg-secondary md:ps-10 py-4 flex fixed right-0 left-0
        shadow-lg'>
            {back && (
                <a href="/" className='flex ms-4 md:ms-0 me-2 my-auto'>
                    <PrimaryButton>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 font-bold">
                            <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                        </svg>
                    </PrimaryButton>
                </a>
            )}


            <img src={logo} className='size-10 ms-auto md:ms-0' alt="Kiann"/>
            <h2 className="font-mono text-2xl my-auto ms-2 me-auto md:me-0 text-tertiary">KIANN</h2>

            <div className='ms-auto my-auto hidden md:block'>
                <div className="border-line-1">
                </div>
                <div className="mt-2 border-line-2 ml-auto">
                </div>
            </div>
        </header>
    );
}

export default header;