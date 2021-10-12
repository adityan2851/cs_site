import AchievementsCard from "./achievementCard";
import "./AchievementPage.css";

import AchievementsData from "./data";

const AchievementsWrapper = () => {
    return (
    <div className="container">hellow orld

        <div className="d-flex align-items-center justify-content-around">
            {console.log(AchievementsData)}
            {AchievementsData.map((entry, index) => {
                return (<AchievementsCard 
                    key={index}
                    eventName={entry.eventName}
                    image={entry.image}
                    students={entry.students}
                    venue={entry.venue}
                    title={entry.title}
                    year={entry.year}
                    amount={entry.amount}
                    place={entry.place}
                    date={entry.date}
                />)
            })}
        </div>
    </div>);
}

export default AchievementsWrapper;