import React from "react";
import './Results.css';
import Download from '../assets/download.svg';

const Results = ({ selectedPatient }) => {
    const labResults = selectedPatient ? selectedPatient.lab_results : [];

    return (
        <div className="results">
            <div className="heading">
                <p>Lab Results</p>
            </div>
            <div className="content">
                {labResults && labResults.length > 0 ? (
                    <ul>
                        {labResults.map((result, index) => (
                            <li
                                key={index}
                                className={`lab-result-item ${index === 1 ? 'highlight' : ''}`}
                            >
                                <span>{result}</span>
                                <img src={Download} alt="Download icon" className="icon" />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No lab results available.</p>
                )}
            </div>
        </div>
    );
}

export default Results;