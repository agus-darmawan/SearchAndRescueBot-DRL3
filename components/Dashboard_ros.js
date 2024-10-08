"use client"
import React from "react"
import CarVisualization from "./CarVisualization"
import RosComponent from "../data/RosComponent"
import Vol_progressBar from "./Vol_progressBar";
import Ros_status from "./Ros_status";
import Camera from "./Camera";
import Camera1 from "./Camera1";
export default function Dashboard_ros() {

    const { connected, pointCloudData, personStatus, timeStamp,yaw } = RosComponent();
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');  // Tambahkan '0' jika perlu

    const time = `${hours}:${minutes}`;

    let progress = 80;
    return (
        <div className=" h-5/6 mx-auto w-11/12 grid grid-cols-4 gap-4 grid-rows-2 p-7">

            <div className="col-start-2 col-end-4 row-start-1 row-end-3 bg-[#000] p-4 rounded shadow-md z-[3]">
                <CarVisualization pointCloudData={pointCloudData} />
            </div>
            <div className="bg-[#0b0b0c] bg-opacity-50 h-full w-full  shadow-md flex flex-col relative  height-auto text-foreground box-border backdrop-blur-md rounded-lg saturate-100 z-[3]">

                <Ros_status connected={connected} pointCloudData={pointCloudData} />

            </div>
            <div className="bg-[#0b0b0c] bg-opacity-50 p-4  shadow-md flex flex-row relative overflow-hidden height-auto text-foreground box-border backdrop-blur-md rounded-lg saturate-100 z-[3] ">
                <div className="basis-1/2 h-full w-full">
                    <Vol_progressBar percentage={progress} />
                </div>
                <div className="basis-1/2 h-full flex flex-col justify-between p-4">
                    <div className="-space-y-1">
                        <h1 className="font-bold text-lg text-[#71717A]"> UPDATED</h1>
                        <h1 className="font-bold text-lg text-[#71717A]">{time}</h1>
                    </div>

                    <div className="-space-y-1">
                        <h1 className="font-bold text-[1rem] text-[#D4D4D8]"> Deep Robotics</h1>
                        <h1 className="font-bold text-[1rem] text-[#D4D4D8]"> Lite 3</h1>
                    </div>

                    <div className="-space-y-1">
                        <h1 className="font-bold text-lg text-[#71717A]">{timeStamp}</h1>
                        <h1 className="font-bold text-lg text-[#71717A]">Berjalan</h1>
                    </div>

                </div>



            </div>

            <div className="bg-[#0b0b0c] bg-opacity-50 p-4  shadow-md flex flex-col relative overflow-hidden height-auto text-foreground box-border backdrop-blur-md rounded-lg saturate-100 z-[3]">
               <Camera />
            </div>
            <div className="bg-[#0b0b0c] bg-opacity-50 p-4  shadow-md flex flex-col relative overflow-hidden height-auto text-foreground box-border backdrop-blur-md rounded-lg saturate-100 z-[3]">
             <Camera1 />
            </div>


        </div>
    )
};

