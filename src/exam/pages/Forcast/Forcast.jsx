import React from "react";
import WeeklyCard from "../../components/WeeklyCard/WeeklyCard";


export const Forcast = ({ type }) => {
    return (
        <div>
            <WeeklyCard tempType={type} />
        </div>
    );
};


