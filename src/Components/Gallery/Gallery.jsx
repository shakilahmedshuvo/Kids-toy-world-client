

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
                    <div className="flex flex-col p-2 bg-sky-500 rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 15 }}></span>
                        </span>
                        days
                    </div>
                    <div className="flex flex-col p-2 bg-sky-500 rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 10 }}></span>
                        </span>
                        hours
                    </div>
                    <div className="flex flex-col p-2 bg-sky-500 rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 24 }}></span>
                        </span>
                        min
                    </div>
                    <div className="flex flex-col p-2 bg-sky-500 rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 2 }}></span>
                        </span>
                        sec
                    </div>
                </div>
                {/* count down option end */}
            </div>
            <div>
                <h2 className="font-bold text-2xl  text-center m-6">
                    Our Photos Gallery
                </h2>
            </div>
            {/* photo grid section start */}
            <div className="grid grid-cols-3 gap-3 max-w-5xl mx-auto">
                <img 
                className="rounded-xl"
                src="https://img.freepik.com/free-photo/small-red-car-toy-kid-child-playing-with-it_114579-7239.jpg?w=826&t=st=1684491970~exp=1684492570~hmac=46cab902634914accf1d15f3f0425c38fac741f7158499b7d311794cda8475e1" alt="" />
                <img 
                className="rounded-xl"
                src="https://img.freepik.com/free-photo/kid-playing-home_23-2148131061.jpg?w=826&t=st=1684491972~exp=1684492572~hmac=131661ab483e70f6eae0408551803311de0607653e7cbb3ddd26e326be6fbd83" alt="" />
                <img 
                className="rounded-xl"
                src="https://img.freepik.com/free-photo/toy-red-car-with-pinecone-top_1252-14.jpg?w=826&t=st=1684491974~exp=1684492574~hmac=fbbb76b08fa328f296a4629d0c43e1465214b0e1b32d9a8cb7b843148446770a" alt="" />
                <img 
                className="rounded-xl"
                src="https://img.freepik.com/free-photo/close-up-toy-car-with-easter-eggs_23-2149318362.jpg?w=826&t=st=1684491978~exp=1684492578~hmac=52eb2d35ce786eb3c56e8b5f9d1f8ee895728c5fb94007d1d7356a9468e66378" alt="" />
                <img 
                className="rounded-xl"
                src="https://img.freepik.com/premium-photo/car-gift-concept-human-holding-hands-palm-toy-car-with-red-ribbon-yellow-background-top-view-flat-lay-composition-best-offer-cars-sale-rent-template-presentation-show-vehicle_94095-150.jpg?w=826" alt="" />
                <img 
                className="rounded-xl"
                src="https://img.freepik.com/free-photo/red-car-with-christmas-ball-top_1252-296.jpg?w=826&t=st=1684491990~exp=1684492590~hmac=b149628bde19703861febcbefe118cae3a98ec2496aeebf2411346cbc122e4de" alt="" />
                <img 
                className="rounded-xl"
                src="https://img.freepik.com/free-photo/closeup-old-mini-police-car-toy_181624-45993.jpg?w=826&t=st=1684492573~exp=1684493173~hmac=f5554bd38d07ff3ae9ccad40e2f2eb128d1b0bebf86553270a8a0f32e553c46d" alt="" />
                <img 
                className="rounded-xl"
                src="https://img.freepik.com/free-photo/colorful-car-toys_1194-2341.jpg?1&w=740&t=st=1684491995~exp=1684492595~hmac=c7ca19c600bc9699c069c0a093a59ea7b10b74bd1cfbd3e46da25c965818fd56" alt="" />
                <img 
                className="rounded-xl"
                src="https://img.freepik.com/premium-photo/car-crash-accident-traffic-road-insurance-claim-concept_39768-8268.jpg?w=826" alt="" />
                <img 
                className="rounded-xl"
                src="https://img.freepik.com/premium-photo/blue-rc-toy-suv-truck-car-asphalt-ground_43538-27.jpg?w=826" alt="" />
                <img 
                className="rounded-xl"
                src="https://img.freepik.com/free-photo/high-angle-siblings-playing-with-toys_23-2148355142.jpg?w=826&t=st=1684492009~exp=1684492609~hmac=fb9abc26dfb3c7e77ca766222f4b96083751b992fc48930eab18de09cffb2cad" alt="" />
                <img 
                className="rounded-xl"
                src="https://img.freepik.com/free-photo/little-toy-truck-carrying-christmas-tree_23-2147576826.jpg?w=826&t=st=1684492199~exp=1684492799~hmac=51f9cfaa0770a991fe18abc5c25e0b8d75e25489c14d411bf8fd30595531e5d7" alt="" />
            </div>
        </div >
    );
};

export default Gallery;