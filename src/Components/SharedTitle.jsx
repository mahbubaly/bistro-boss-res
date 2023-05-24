

const SharedTitle = ({ title, subTitle }) => {
    return (
        <>
            <div className="text-black lg:w-[400px] text-center mx-auto">
                
                    <h1 className="text-xl text-yellow-500 mb-2">---{title}---</h1>
                    <h4 className="border-y-4  my-3 py-3 uppercase font-semibold text-2xl">{subTitle}</h4>
                

            </div>

        </>
    );
};

export default SharedTitle;