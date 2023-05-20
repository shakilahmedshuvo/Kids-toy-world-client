import { useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ToyTabs = () => {


    // three sub category get the data from json
    const urlOne = 'http://localhost:5000/toyOne';
    const urlTwo = 'http://localhost:5000/toyTwo';
    const urlThree = 'http://localhost:5000/toyThree';

    // toy one
    useEffect(() => {
        fetch(urlOne)
            .then(res => res.json())
            .then(data => {
                // setToys(data)
                console.log(data);
            })
    }, [urlOne]);

    // toy two
    useEffect(() => {
        fetch(urlTwo)
            .then(res => res.json())
            .then(data => {
                // setToys(data)
                console.log(data);
            })
    }, [urlTwo]);

    // toy three
    useEffect(() => {
        fetch(urlThree)
            .then(res => res.json())
            .then(data => {
                // setToys(data)
                console.log(data);
            })
    }, [urlThree]);


    return (
        <div className='max-w-5xl mx-auto '>
            <hr className="border-b border-solid mt-20 border-4" />
            <Tabs className="max-w-6xl mx-auto my-6 font-bold">
                <h2 className="font-bold text-5xl text-center m-5 pb-4 text-sky-500">
                    kids Toy Car's
                </h2>
                <p className="text-center font-bold text-2xl text-slate-500 pb-5">
                    Kids Loves His Toys
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
                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ToyTabs;