<<<<<<< HEAD
import { ActivityContextProvider, useActivityContext } from "../../contexts/activity"
import Loading from "components/Loading/Loading"
import ActivityFeed from "components/ActivityFeed/ActivityFeed"
import { useEffect, useState } from 'react'
=======
import "./ActivityPage.css";
import { useActivityContext } from "../../contexts/activity";
import ActivityFeed from "components/ActivityFeed/ActivityFeed";
import { useEffect } from 'react';
>>>>>>> c325d6d2a0dd6ab6c3d5b0be8ddf45d3af1fe83d


export default function ActivityPage(props){ 
    const { isLoading, setIsLoading, reload } = useActivityContext();
    
    //Fixes bug where page wont reload after logging in.
    useEffect(() => {
        reload();
    },[])

    return(
        <div className="activity-page">
            <ActivityFeed />
        </div>
    )

}

