import SummaryStat from "components/SummaryStat/SummaryStat"
import { useActivityContext } from "../../contexts/activity"
import { Link } from "react-router-dom"
import Loading from "components/Loading/Loading"
<<<<<<< HEAD
import { useEffect, useState } from "react"

export default function ActivityFeed(props){
    const { activity, isLoading, exerciseStats } = useActivityContext()
=======
import { useState } from "react";
import SleepForm from "components/SleepForm/SleepForm";


export default function ActivityFeed(props){
    const { activity, isLoading, exerciseStats, sleep, showSleep, setShowSleep, reload } = useActivityContext();
    const { isOpen, setIsOpen } = useState(false);
    
    function handleShowSleep(){ 
        let show = !showSleep;
        setShowSleep(show);
        
    }

    if(activity === undefined || activity === null){
        reload();
    }

>>>>>>> c325d6d2a0dd6ab6c3d5b0be8ddf45d3af1fe83d

if(Object.keys(activity).length > 0 && exerciseStats != null){
    return (
        <div className="activity-feed">
            <div className="actNav">
                <div className="activity-nav-header">
                    <h3 className="activity-title">Activity Feed</h3>
                </div>
                <div className="activity-nav-btns">
                    <button className="activity-btns">Log Exercise</button>
                    <button className="activity-btns">Log Sleep</button>
                    <button className="activity-btns">Log Nutrition</button>
                </div>
            </div>
            <div className="per-category">
                <div className="first-row">
                    <div className="box-1">
                        <SummaryStat totalCalories={activity.totalPerDay} string={"TotalCalories"}/>
                    </div>
                    <div className="box-1">
                        <SummaryStat totalDuration={exerciseStats.totalMinPerCat} string={"TotalDuration"}/>
                    </div>   
                </div>
                <div className="second-row">
                    <div className="box-1">
                        <SummaryStat avgCalories={activity.totalPerCategory} string={"TotalPerCategory"}/>
                    </div>
                    <div className="box-1">
                        <SummaryStat avgDuration={exerciseStats.avgMinPerCat} string={"AvgPerCategory"}/>
                    </div>   
                </div>
            </div>
<<<<<<< HEAD
=======
            <div className="sleep">
                <div className="sleep-box">
                    {showSleep ? <button className="log-sleep" onClick={handleShowSleep}>Log Sleep</button> : ""}
                    {showSleep ? <SummaryStat sleep={sleep} string={"Sleep"}/> : <SleepForm />}
                </div>
            </div> 
>>>>>>> c325d6d2a0dd6ab6c3d5b0be8ddf45d3af1fe83d
        </div>
    )   
}
else{
   return(
    <div>
        <Loading />
        <Link to="/nutrition/create"><button className="activity-btns">Record Nutrition</button></Link>
    </div>
   )
} 
}