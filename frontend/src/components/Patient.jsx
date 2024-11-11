import './Patient.css';
import React from 'react';
import FemaleIcon from '../assets/FemaleIcon.svg';
import MaleIcon from '../assets/MaleIcon.svg';
import InsuranceIcon from '../assets/InsuranceIcon.svg';
import PhoneIcon from '../assets/PhoneIcon.svg';
import BirthIcon from '../assets/BirthIcon.svg';

const Patient_card = ({ patient }) => {
    if (!patient) return <div>Select a patient to see details</div>;

    return (
        <div className="patient-card">
            <div className="patient_heading">
                <img src={patient.image} alt={patient.name} />
                <h2>{patient.name}</h2>
            </div>
            <div className="patient_details">
                <div className="specific_detail">
                    <img src={BirthIcon} alt="" />
                    <div className="details">
                        <p className='title'>Date of Birth</p>
                        <p className='detail'>{patient.date_of_birth || 'N/A'}</p>
                    </div>
                </div>
                <div className="specific_detail">
                    <img src={FemaleIcon} alt="" />
                    <div className="details">
                        <p className='title'>Gender</p>
                        <p className='detail'>{patient.gender || 'N/A'}</p>
                    </div>
                </div>
                <div className="specific_detail">
                    <img src={PhoneIcon} alt="" />
                    <div className="details">
                        <p className='title'>Contact Info.</p>
                        <p className='detail'>{patient.phone_number|| 'N/A'}</p>
                    </div>
                </div>
                <div className="specific_detail">
                    <img src={PhoneIcon} alt="" />
                    <div className="details">
                        <p className='title'>Emergency Contact</p>
                        <p className='detail'>{patient.emergency_contact|| 'N/A'}</p>
                    </div>
                </div>
                <div className="specific_detail">
                    <img src={InsuranceIcon} alt="" />
                    <div className="details">
                        <p className='title'>Insurance Provider</p>
                        <p className='detail'>{patient.insurance_type|| 'N/A'}</p>
                    </div>
                </div>

            </div>
            <button>
                Show All Information
            </button>

        </div>
    );
};

export default Patient_card;