import React from "react";
import './List.css';

const List = ({ selectedPatient }) => {
    const diagnosticList = selectedPatient ? selectedPatient.diagnostic_list : [];

    return (
        <div className="diagnostic-list">
            <div className="heading">
                <p>Diagnostic List</p>
            </div>
            <div className="content">
                {diagnosticList && diagnosticList.length > 0 ? (
                    <>
                        <div className="diagnostic-item-header header-background">
                            <p><strong>Name</strong></p>
                            <p><strong>Description</strong></p>
                            <p><strong>Status</strong></p>
                        </div>
                        {diagnosticList.map((diagnostic, index) => (
                            <div key={index} className="diagnostic-item">
                                <div className="diagnostic-item-header">
                                    <p>{diagnostic.name}</p>
                                    <p>{diagnostic.description}</p>
                                    <p>{diagnostic.status}</p>
                                </div>
                                <div className="diagnostic-item-readings">
                                    {}
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <p>No diagnostics available.</p>
                )}
            </div>
        </div>
    );
}

export default List;