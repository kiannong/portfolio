const TertiaryButton = ({ className = '', children }) => {
    return (
        <button className={`btn-tertiary ${className}`}>
            {children}
        </button>
    );
}

export default TertiaryButton;