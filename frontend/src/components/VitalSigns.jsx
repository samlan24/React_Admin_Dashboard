import React from 'react';
import './VitalSigns.css';
import temperatureIcon from '../assets/temperature.svg';
import respiratoryIcon from '../assets/respiratoryRate.svg';
import heartRateIcon from '../assets/HeartBPM.svg';

const VitalSigns = ({ selectedPatient }) => {

    const march2024Data = selectedPatient.diagnosis_history.find(record =>
        record.month === 'March' && record.year === 2024
    );


    if (!march2024Data) {
        return <div>No vital signs available for March 2024.</div>;
    }

    return (
        <div className="vital-signs">
            <div className="vital-signs-card">
                <div className="card respiratory">
                    <img src={respiratoryIcon} alt="Respiratory Rate" />
                    <p className='heading'>Respiratory Rate</p>
                    <p className='reading'> {march2024Data.respiratory_rate.value} bpm</p>
                    <p className='levels'>{march2024Data.respiratory_rate.levels}</p>
                </div>
                <div className="card temperature">
                    <img src={temperatureIcon} alt="Temperature" />
                    <p className='heading'>Temperature</p>
                    <p className='reading'>{march2024Data.temperature.value} °F</p>
                    <p className='levels'>{march2024Data.temperature.levels}</p>
                </div>
                <div className="card heart-rate">
                    <img src={heartRateIcon} alt="Heart Rate" />
                    <p className='heading'>Heart Rate</p>
                    <p className='reading'>{march2024Data.heart_rate.value} bpm</p>
                    <p className='levels'>{march2024Data.heart_rate.levels}</p>
                </div>
            </div>
        </div>
    );
}

export default VitalSigns;