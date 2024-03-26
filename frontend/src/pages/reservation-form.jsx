import React from 'react';
import TeamsForm from '../components/teams-form.jsx';
import { useParams } from 'react-router-dom';

const ReservationForm = () => {
  const { fieldId, fieldName } = useParams();
    return (
      <div>
        <TeamsForm fieldId = {fieldId} fieldName = {fieldName}/>
      </div>
    )
  }
  
  export default ReservationForm