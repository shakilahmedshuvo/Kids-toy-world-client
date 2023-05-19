

const Gallery = () => {
    return (
        <div className="max-w-6xl mx-auto">
            {/* Gallery section start */}
            <hr className="border-b border-solid m-16" />
            <h2 className="text-4xl text-center font-bold text-sky-500">
                KIDS TOY GALLERY
            </h2>
            <p className="text-center mt-8 font-bold text-slate-500">
                Our kid-centric store is a treasure trove of delights, offering a delightful
                <br />
                array of products tailored to meet the needs and desires of
                <br />
                your little ones.
            </p>
            {/* count down option start */}
            <div className="mx-auto text-center grid grid-cols-3 mt-5">
                <div>
                </div>
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 15 }}></span>
                        </span>
                        days
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 10 }}></span>
                        </span>
                        hours
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 24 }}></span>
                        </span>
                        min
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 2 }}></span>
                        </span>
                        sec
                    </div>
                </div>
              {/* count down option end */}
            </div>
            {/* photo grid section start */}
            <div>

            </div>
        </div >
    );
};

export default Gallery;