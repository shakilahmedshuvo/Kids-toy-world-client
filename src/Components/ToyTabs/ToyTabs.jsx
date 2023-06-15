import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OneTabs from './OneTabs';

const ToyTabs = () => {

    const [toysOne, setToysOne] = useState([]);
    const [toysTwo, setToysTwo] = useState([]);
    const [toysThree, setToysThree] = useState([]);

    // three sub category get the data from json
    const urlOne = 'https://kids-toy-world-server.vercel.app/toyOne';
    const urlTwo = 'https://kids-toy-world-server.vercel.app/toyTwo';
    const urlThree = 'https://kids-toy-world-server.vercel.app/toyThree';

    // toy one
    useEffect(() => {
        fetch(urlOne)
            .then(res => res.json())
            .then(data => setToysOne(data))
    }, []);

    // toy two
    useEffect(() => {
        fetch(urlTwo)
            .then(res => res.json())
            .then(data => setToysTwo(data))
    }, []);

    // toy three
    useEffect(() => {
        fetch(urlThree)
            .then(res => res.json())
            .then(data => setToysThree(data))
    }, []);

    // console.log(toysOne?.price);
    return (
        <div className='max-w-7xl mx-auto mb-20'>
            <hr className="border-b border-solid mt-20 border-4" />
            <Tabs className="max-w-7xl mx-auto my-6 font-bold">
                <h2 className="font-bold text-5xl text-center m-5 pb-4 text-sky-500">
                    kids Toy Car's
                </h2>
                <p className="text-center font-bold text-2xl text-slate-500 pb-5">
                    Kids Loves His Toys
                </p>
                <p className="text-center font-bold text-1xl text-slate-500 pb-5">
                    Our Toys Tab Section
                </p>
                <TabList>
                    <Tab>
                        Racing Car
                    </Tab>
                    <Tab>
                        Truck
                    </Tab>
                    <Tab>
                        Mini Fire Truck
                    </Tab>
                </TabList>
                {/* data section starts */}
                {/* first map section */}
                <TabPanel>
                    <div className='grid lg:grid-cols-2 my-6'>
                        {
                            toysOne.map(one => <OneTabs
                                key={one.id}
                                one={one}
                            ></OneTabs>)
                        }
                    </div>
                </TabPanel>
                {/* second map section */}
                <TabPanel>
                    <div className='grid lg:grid-cols-2 my-6'>
                        {
                            toysTwo.map(one => <OneTabs
                                key={one.id}
                                one={one}
                            ></OneTabs>)
                        }
                    </div>
                </TabPanel>

                {/* third  map section */}
                <TabPanel>
                    <div className='grid lg:grid-cols-2 my-6'>
                        {
                            toysThree.map(one => <OneTabs
                                key={one.id}
                                one={one}
                            ></OneTabs>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div >
    );
};

export default ToyTabs;