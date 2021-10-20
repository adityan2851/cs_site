import AchievementsCard from "./achievementCard";
import "./AchievementPage.css";

import AchievementsData from "./data";

const AchievementsWrapper = () => {
    return (
        <div className="container my-5">
            <div>
                <h1 className="page_heading">Achievements</h1>
                <div className="underline_heading"></div>
            </div>
            {AchievementsData.map((rowEntry, index) => {
                return (
                    <div key={index} class="row">

                        {rowEntry.map((entry, index) => {
                            return (
                                <div className="col-md-4">
                                    <AchievementsCard
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
                                    />
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

export default AchievementsWrapper;