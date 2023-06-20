

const SectionTitles = ({heading,subHeading}) => {
    return (
        <div className="text-center my-10">
            <h2 className="text-yellow-500 text-xl pb-4">---{subHeading}---</h2>
            <h2 className="text-5xl w-1/3  border-y-4 mx-auto">{heading}</h2>
        </div>
    );
};

export default SectionTitles;