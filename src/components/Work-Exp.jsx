import React from 'react'

const WorkExp = () => {
    return (
        <div
          name="work experience"
          className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Work Experience 
              </p>
            </div>
            <div className='work-exp-company'>
<ol>
  <li>
            <p className="text-xl">
            <h1 className='text-4xl font-bold underline'> ParkIt.Biz</h1>
            <ul className='list-disc'>
              <li>
            Business and Sales Intern </li></ul>
            <br></br>
            </p>
    </li>
    <li>
            <p className="text-xl mt-20">
              
              <h1 className='text-4xl font-bold underline'> AIESEC in Mumbai </h1>
              <br></br>
              <ul className='list-disc'>
                <li>
              <h2 className='text-2xl '> Manager of Raising and Operations        [Dec 2022-March 2023]</h2>
              </li>
              <li>
              <h2 className='text-2xl '>Head for Customer Relations              [July 2022- Dec 2022]</h2>
              </li>
              <li>
              <h2 className='text-2xl '>Vice President for Delegate Experience   [Aug 2022-Sept 2022]</h2>
              </li>
              <li>
              <h2 className= 'text-2xl'> Head for International Relations        [Jan 2022-July 2022]</h2>
              </li>
              </ul>
            </p>
    </li>
    
            
            </ol>
            </div>
          </div>
        </div>
      );
    };

export default WorkExp
