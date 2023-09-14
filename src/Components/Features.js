import React from 'react'
import { IoIosFitness } from 'react-icons/io';
import { BiRun } from 'react-icons/bi';
import { FaRegCalendarDays } from 'react-icons/fa6';

const Features = () => {
  return (
    <div className='features'>
        <div className="container-fluid my-5">
        <div className="row">
            <div className="col-lg-4 p-0"  data-aos="fade-right" data-aos-delay="400">
                <div className="boxsss d-flex align-items-center   px-5" >
                    <BiRun/>
                    <div className="">
                        <h2 className="text-white mb-3">Progression</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 p-0" data-aos="zoom-out-up" >
                <div className=" boxsss active d-flex align-items-center px-5">
                    <IoIosFitness/>
                    <div className="">
                        <h2 className="mb-3">Workout</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 p-0"  data-aos="fade-left" data-aos-delay="400">
                <div className=" boxsss d-flex align-items-center  px-5">
                    <FaRegCalendarDays/>
                    <div className="">
                        <h2 className="text-white mb-3">Nutrition</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Features