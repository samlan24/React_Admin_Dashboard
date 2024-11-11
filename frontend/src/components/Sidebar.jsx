import React from 'react';
import './Sidebar.css';
import search from '../assets/search.svg';
import horizontal from '../assets/more_horiz.svg';

const Sidebar = ({ patients, onPatientSelect, selectedPatient }) => {
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <p>Patients</p>
                <img src={search} alt="Search" />
            </div>
            <div className="sidebar_content">
                {patients.map((patient, index) => (
                    <div
                        key={index}
                        className={`patient-item ${selectedPatient && selectedPatient.name === patient.name ? 'selected' : ''}`} // Apply selected class conditionally
                        onClick={() => onPatientSelect(patient)}
                    >
                        <img src={patient.image} alt={patient.name} />
                        <div className="patient-details">
                            <p>{patient.name}</p>
                            <div className="gender-age">
                                <p>{patient.gender},</p>
                                <p>{patient.age}</p>

                            </div>
                        </div>
                        <div className="more">
                            <img src={horizontal} alt="More" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;