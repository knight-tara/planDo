//TO DO:
// add validation for user input
import { ComponentContainer } from "./componentContainer";
import { useState } from "react";

export const Question3 = ({ scrollToNext, scrollToPrevious }) => {

    const [answer, setAnswer] = useState("");

    const handleNextButtonClick = () => {
        sessionStorage.setItem("noOfGuests", answer);
        scrollToNext();
    };

    const handlePreviousButtonClick = () => {
        scrollToPrevious();
    }

    return (
        <ComponentContainer>
        <div>
            <h2>Plan-Do</h2>
        </div>
        <div>
            <h1>For how many?</h1>
        </div>
        <div>
            <input
                name="noOfGuests"
                placeholder="X number of guests"
                onChange={(e) => setAnswer(e.target.value)}
            />
        </div>
        <div>
            <button onClick={handlePreviousButtonClick}>Previous</button>
            <button onClick={handleNextButtonClick}>Next</button>
        </div>
        </ComponentContainer>
    );

};