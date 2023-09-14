import React from 'react'

const Tables = () => {
  return (
<>
<div className="tabless">
    
<div className="container gym-feature py-4">
        <div className="d-flex flex-column text-center mb-3">
            <h4 className='heder-text'>class Timetable</h4>
            <h3 >Working Hours and class Time</h3>
        </div>
        <div className="tab-className">
            <ul className="nav nav-pills justify-content-center mb-4"  id="myTab" role="tablist" >
                <li className="nav-item" role="presentation">
                    <button className="nav-link active"  type="button" data-bs-toggle="pill" id="home-tab" href="#className-all"  aria-controls="home">All classNamees</button>
                </li>

                <li className="nav-item" role="presentation">
                    <button className="nav-link" type="button" id="profile-tab" data-bs-toggle="pill" href="#className-cardio" aria-controls="profile" >Cardio</button>

                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" type="button" id="ent-tab" data-bs-toggle="pill"role="tab" aria-controls="ent" href="#className-crossfit">Crossfit</button>

                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" type="button" id="atrology-tab" data-bs-toggle="pill"  aria-controls="atrology" href="#className-powerlifting">Powerlifting</button>
                    {/* <button className="nav-link" type="button" id="atrology-tab" data-bs-toggle="pill" href="#atrology" role="tab" aria-controls="atrology" aria-selected="false"> */}

                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div id="className-all" className="container tab-pane p-0 active show " role="tabpanel" aria-labelledby="home-tab" tabIndex="0">

                    <div className="table-responsive">
                        <table className="table table-bordered table-lg m-0">
                            <thead className=" text-center">
                                <tr>
                                    <th>Time</th>
                                    <th>Monday</th>
                                    <th>Tuesday</th>
                                    <th>Wednesday</th>
                                    <th>Thursday</th>
                                    <th>Friday</th>
                                    <th>Saturday</th>
                                    <th>Sunday</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                <tr>
                                    <th className=" align-middle">6.00am - 8.00am</th>
                                    <td><h5>Cardio</h5>John Deo</td>
                                    <td></td>
                                    <td><h5>Crossfit</h5>Adam Phillips</td>
                                    <td></td>
                                    <td><h5>Power Lifting</h5>James Alien</td>
                                    <td></td>
                                    <td><h5>Cardio</h5>John Deo</td>
                                </tr>
                                <tr>
                                    <th className=" align-middle">10.00am - 12.00am</th>
                                    <td></td>
                                    <td><h5>Power Lifting</h5>James Alien</td>
                                    <td></td>
                                    <td><h5>Cardio</h5>John Deo</td>
                                    <td></td>
                                    <td><h5>Crossfit</h5>Adam Phillips</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th className=" align-middle">5.00pm - 7.00pm</th>
                                    <td><h5>Crossfit</h5>Adam Phillips</td>
                                    <td></td>
                                    <td><h5>Power Lifting</h5>James Alien</td>
                                    <td></td>
                                    <td><h5>Cardio</h5>John Deo</td>
                                    <td></td>
                                    <td><h5>Crossfit</h5>Adam Phillips</td>
                                </tr>
                                <tr>
                                    <th className=" align-middle">7.00pm - 9.00pm</th>
                                    <td></td>
                                    <td><h5>Cardio</h5>John Deo</td>
                                    <td></td>
                                    <td><h5>Crossfit</h5>Adam Phillips</td>
                                    <td></td>
                                    <td><h5>Power Lifting</h5>James Alien</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="className-cardio"   className="container tab-pane fade p-0" aria-labelledby="profile-tab" tabIndex="0">

                    <div className="table-responsive">
                        <table className="table table-bordered table-lg m-0">
                            <thead className=" text-center">
                                <tr>
                                    <th>Time</th>
                                    <th>Monday</th>
                                    <th>Tuesday</th>
                                    <th>Wednesday</th>
                                    <th>Thursday</th>
                                    <th>Friday</th>
                                    <th>Saturday</th>
                                    <th>Sunday</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                <tr>
                                    <th className=" align-middle">6.00am - 8.00am</th>
                                    <td className="text-white"><h5 className="text-white">Cardio</h5>John Deo</td>
                                    <td></td>
                                    <td><h5>Crossfit</h5>Adam Phillips</td>
                                    <td></td>
                                    <td><h5>Power Lifting</h5>James Alien</td>
                                    <td></td>
                                    <td className="text-white active"><h5 className="text-white">Cardio</h5>John Deo</td>
                                </tr>
                                <tr>
                                    <th className=" align-middle">10.00am - 12.00am</th>
                                    <td></td>
                                    <td><h5>Power Lifting</h5>James Alien</td>
                                    <td></td>
                                    <td className="text-white active"><h5 className="text-white">Cardio</h5>John Deo</td>
                                    <td></td>
                                    <td><h5>Crossfit</h5>Adam Phillips</td>
                                    <td></td> 
                                </tr>
                                <tr>
                                    <th className=" align-middle active">5.00pm - 7.00pm</th>
                                    <td><h5>Crossfit</h5>Adam Phillips</td>
                                    <td></td>
                                    <td><h5>Power Lifting</h5>James Alien</td>
                                    <td></td>
                                    <td className="text-white active"><h5 className="text-white">Cardio</h5>John Deo</td>
                                    <td></td>
                                    <td><h5>Crossfit</h5>Adam Phillips</td>
                                </tr>
                                <tr>
                                    <th className=" align-middle">7.00pm - 9.00pm</th>
                                    <td></td>
                                    <td className="text-white active"><h5 className="text-white">Cardio</h5>John Deo</td>
                                    <td></td>
                                    <td><h5>Crossfit</h5>Adam Phillips</td>
                                    <td></td>
                                    <td><h5>Power Lifting</h5>James Alien</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="className-crossfit" className="container tab-pane fade p-0" aria-labelledby="ent-tab" tabIndex="0">
                    <div className="table-responsive">
                        <table className="table table-bordered table-lg m-0">
                            <thead className=" text-center">
                                <tr>
                                    <th>Time</th>
                                    <th>Monday</th>
                                    <th>Tuesday</th>
                                    <th>Wednesday</th>
                                    <th>Thursday</th>
                                    <th>Friday</th>
                                    <th>Saturday</th>
                                    <th>Sunday</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                <tr>
                                    <th className=" align-middle">6.00am - 8.00am</th>
                                    <td><h5>Cardio</h5>John Deo</td>
                                    <td></td>
                                    <td className="text-white active"><h5 className="text-white">Crossfit</h5>Adam Phillips</td>
                                    <td></td>
                                    <td><h5>Power Lifting</h5>James Alien</td>
                                    <td></td>
                                    <td><h5>Cardio</h5>John Deo</td>
                                </tr>
                                <tr>
                                    <th className=" align-middle">10.00am - 12.00am</th>
                                    <td></td>
                                    <td><h5>Power Lifting</h5>James Alien</td>
                                    <td></td>
                                    <td><h5>Cardio</h5>John Deo</td>
                                    <td></td>
                                    <td className="text-white active"><h5 className="text-white">Crossfit</h5>Adam Phillips</td>
                                    <td></td> 
                                </tr>
                                <tr>
                                    <th className=" align-middle">5.00pm - 7.00pm</th>
                                    <td className="text-white"><h5 className="text-white">Crossfit</h5>Adam Phillips</td>
                                    <td></td>
                                    <td><h5>Power Lifting</h5>James Alien</td>
                                    <td></td>
                                    <td><h5>Cardio</h5>John Deo</td>
                                    <td></td>
                                    <td className="text-white"><h5 className="text-white">Crossfit</h5>Adam Phillips</td>
                                </tr>
                                <tr>
                                    <th className=" align-middle">7.00pm - 9.00pm</th>
                                    <td></td>
                                    <td><h5>Cardio</h5>John Deo</td>
                                    <td></td>
                                    <td className="text-white active"><h5 className="text-white">Crossfit</h5>Adam Phillips</td>
                                    <td></td>
                                    <td><h5>Power Lifting</h5>James Alien</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="className-powerlifting" aria-labelledby="atrology-tab "role="tabpanel" className="container tab-pane fade p-0 ">
                {/* <div className="tab-pane fade" id="atrology" role="tabpanel" aria-labelledby="atrology-tab" tabIndex="0"> */}

                    <div className="table-responsive">
                        <table className="table table-bordered table-lg m-0">
                            <thead className=" text-white text-center">
                                <tr>
                                    <th>Time</th>
                                    <th>Monday</th>
                                    <th>Tuesday</th>
                                    <th>Wednesday</th>
                                    <th>Thursday</th>
                                    <th>Friday</th>
                                    <th>Saturday</th>
                                    <th>Sunday</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                <tr>
                                    <th className=" align-middle">6.00am - 8.00am</th>
                                    <td><h5>Cardio</h5>John Deo</td>
                                    <td></td>
                                    <td><h5>Crossfit</h5>Adam Phillips</td>
                                    <td></td>
                                    <td className="text-white active"><h5 className="text-white">Power Lifting</h5>James Alien</td>
                                    <td></td>
                                    <td><h5>Cardio</h5>John Deo</td>
                                </tr>
                                <tr>
                                    <th className=" align-middle">10.00am - 12.00am</th>
                                    <td></td>
                                    <td className="text-white active"><h5 className="text-white ">Power Lifting</h5>James Alien</td>
                                    <td></td>
                                    <td><h5>Cardio</h5>John Deo</td>
                                    <td></td>
                                    <td><h5>Crossfit</h5>Adam Phillips</td>
                                    <td></td> 
                                </tr>
                                <tr>
                                    <th className=" align-middle">5.00pm - 7.00pm</th>
                                    <td><h5>Crossfit</h5>Adam Phillips</td>
                                    <td></td>
                                    <td className="text-white active"><h5 className="text-white">Power Lifting</h5>James Alien</td>
                                    <td></td>
                                    <td><h5>Cardio</h5>John Deo</td>
                                    <td></td>
                                    <td><h5>Crossfit</h5>Adam Phillips</td>
                                </tr>
                                <tr>
                                    <th className=" align-middle">7.00pm - 9.00pm</th>
                                    <td></td>
                                    <td><h5>Cardio</h5>John Deo</td>
                                    <td></td>
                                    <td><h5>Crossfit</h5>Adam Phillips</td>
                                    <td></td>
                                    <td className="text-white active"><h5 className="text-white">Power Lifting</h5>James Alien</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</>
  )
}

export default Tables