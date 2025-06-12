import myIcon from '../assets/images/my-icon.png';
import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedin.png';
import TertiaryButton from "./TertiaryButton.jsx";

const footer = () => {
    return (
        <footer className="bg-secondary flex pt-10 pb-10 border-b-10 xl:border-0 border-tertiary">
            <div className='me-auto mt-auto mb-10 hidden xl:block'>
                <div className="mb-2 border-line-4">
                </div>
                <div className="border-line-3">
                </div>
            </div>

            <div className='text-center mx-auto xl:mx-0'>
                <div className="flex mb-7">
                    <img src={myIcon} className='size-15 mx-auto' alt="Kiann"/>
                </div>
                <div className="flex">
                    <TertiaryButton className='ms-auto py-2 px-3'>
                        <img src={linkedin} className='size-6' alt="LinkedIn Account"/>
                    </TertiaryButton>

                    <TertiaryButton className='ms-2 me-auto'>
                        <img src={github} className='size-6' alt="Github Account"/>
                    </TertiaryButton>
                </div>
                <h6 className='text-center text-white mt-3'>kiannong.dev@gmail.com</h6>
                <p className={'text-center text-white text-xs mt-1'}>Last Updated: June 2025</p>
            </div>

            <div className='ms-auto mt-auto mb-10 hidden xl:block'>
                <div className="border-line-3">
                </div>
                <div className="mt-2 border-line-4 ml-auto">
                </div>
            </div>

        </footer>
    );
}

export default footer;