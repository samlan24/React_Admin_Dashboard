import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './Diagnostics.css';
import VitalSigns from './VitalSigns';

const Diagnostics = ({ selectedPatient }) => {
    // Check if there is a selected patient
    if (!selectedPatient || !selectedPatient.diagnosis_history) {
        return <div>Select a patient to see their diagnosis history.</div>;
    }

    // Extract and filter blood pressure data between October 2023 and March 2024
    const bloodPressureData = selectedPatient.diagnosis_history
        .map(record => ({
            date: new Date(`${record.month} 1, ${record.year}`),
            dateString: `${record.month} ${record.year}`,
            systolic: record.blood_pressure.systolic.value,
            diastolic: record.blood_pressure.diastolic.value
        }))
        .filter(record => record.date >= new Date('2023-09-01') && record.date <= new Date('2024-03-31'))
        .sort((a, b) => a.date - b.date);

    // Prepare labels and datasets for Chart.js
    const labels = bloodPressureData.map(data => data.date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }));
    const systolicValues = bloodPressureData.map(data => data.systolic);
    const diastolicValues = bloodPressureData.map(data => data.diastolic);

    const data = {
        labels,
        datasets: [
            {
                label: 'Systolic',
                data: systolicValues,
                borderColor: '#C26EB4',
                backgroundColor: '#E66FD2',
                fill: false,
                tension: 0.4,
                cubicInterpolationMode: 'monotone',
                pointStyle: 'circle',
                pointBorderColor: '#FFFFFF',
                pointBackgroundColor: '#E66FD2',
                pointBorderWidth: 1,
                pointRadius: 7
            },
            {
                label: 'Diastolic',
                data: diastolicValues,
                borderColor: '#7E6CAB',
                backgroundColor: '#8C6FE6',
                fill: false,
                tension: 0.4,
                cubicInterpolationMode: 'monotone',
                pointStyle: 'circle',
                pointBorderColor: '#FFFFFF',
                pointBackgroundColor: '#8C6FE6',
                pointBorderWidth: 1,
                pointRadius: 7
            }
        ]
    };

    const options = {
        plugins: {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    usePointStyle: true,
                },
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += context.parsed.y;
                        }
                        return label;
                    },
                    footer: function(context) {
                        const date = context[0].label;
                        return `Date: ${date}`;
                    }
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                }
            },
            y: {
                title: {
                    display: true,
                },
                min: 60,
                max: 180
            }
        }
    };

    return (
        <div className="diagnostics">
            <div className="diagnosis-header">
                <p>Diagnosis History</p>
            </div>
            <div className="visualization">
                <div className="canvas-container">
                    <Line data={data} options={options} />
                </div>
            </div>
            <div className="other-info">
                <VitalSigns selectedPatient={selectedPatient} />
            </div>
        </div>
    );
}

export default Diagnostics;