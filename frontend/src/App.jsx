import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Diagnostics from './components/Diagnostics';
import PatientCard from './components/Patient';
import List from './components/List';
import Results from './components/Results';

const App = () => {
  const token = import.meta.env.VITE_ACCESS_TOKEN;
  const apiUrl = 'https://fedskillstest.coalitiontechnologies.workers.dev';

  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Authorization': `Basic ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const patientData = data.slice(0, 13).map(patient => ({
          ...patient,
          name: patient.name,
          image: patient.profile_picture,
          gender: patient.gender,
          age: patient.age
        }));

        setPatients(patientData);

        const jessicaTaylor = patientData.find(patient => patient.name === "Jessica Taylor");
        if (jessicaTaylor) {
          setSelectedPatient(jessicaTaylor);
        }
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, [apiUrl, token]);

  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
  };

  return (
    <div>
      <Navbar />
      <div className="main_content">
        <Sidebar
          patients={patients}
          onPatientSelect={handlePatientSelect}
          selectedPatient={selectedPatient}
        />
        <div className="content_area">
          <Diagnostics selectedPatient={selectedPatient} />
          <List selectedPatient={selectedPatient} />
        </div>
        <div className="last_section">
          <PatientCard patient={selectedPatient} />
          <Results selectedPatient={selectedPatient} />

        </div>

      </div>
    </div>
  );
}

export default App;