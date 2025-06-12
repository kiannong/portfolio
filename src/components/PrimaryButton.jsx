const PrimaryButton = ({ className = '', children }) => {
    return (
        <button className={`btn-primary ${className}`}>
            {children}
        </button>
    );
}

export default PrimaryButton;