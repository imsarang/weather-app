import { BsCloudSunFill } from "react-icons/bs"
import { BsCloudRain} from "react-icons/bs"
export const handleIcons = (condition)=>{
    if(condition=="Partly Cloudy")
        return <BsCloudSunFill className="text-white text-5xl"/>
}

export const forRain = [{
    time:7,
    percent:45
},{
    time:8,
    percent:67
},{
    time:9,
    percent:89
},{
    time:10,
    percent:23
}]