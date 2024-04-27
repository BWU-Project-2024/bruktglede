import React from 'react';

const EmailTemplate = ({ navn, beskrivelse, epost }) => (
  <div>
    <h1>Søknad fra {navn}!</h1>
  <h2>Søknadsbeskrivelse</h2>
    <p>{beskrivelse}</p>
<h3>Sendt fra</h3>
<p>{epost}</p>
  </div>
);

export default EmailTemplate;