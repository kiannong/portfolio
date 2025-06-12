const Dot = ({ className = '' }) => {
    return (
        <div className={`rounded-full size-5 bg-tertiary ${className}`}></div>
    );
}

const ThreeDotsBorder = () => {
    return (
        <div className="flex">
            <Dot />
            <Dot className='mx-3'/>
            <Dot />
        </div>
    );
}

export default ThreeDotsBorder;