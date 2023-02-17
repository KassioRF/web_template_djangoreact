import React, { useState, useEffect } from 'react';
import api from './services/api'

import { ContactModel } from './models/ContactModel';

import './App.css';

function App() {
  
  const [ contacts, setContacts ] = useState<ContactModel[]>([])
  
  useEffect(() => {
    
    api.get('/contacts').then(response => {
      setContacts(response.data);

    })
    .catch(error => { console.log(error); });

  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
      <table>
        <tbody>
        
          { contacts.map(c => (
            <tr key={c.id}>
              <td>{c.name}</td> 
              <td>{c.phone}</td>
            </tr>
          )) }
        
        </tbody>
      </table>

      </header>
    </div>
  );
}


export default App;
