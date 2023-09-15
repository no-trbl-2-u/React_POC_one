import { useState } from 'react';

// Mock Data From DB
const nameDataFromDB = {
  firstName: 'firstFromDB',
  lastName: 'lastFromDB',
};

const useMyForm = () => {
  const [nameData, setNameData] = useState({ firstName: '??', lastName: '??' });

  if (nameData.firstName === '??') {
    console.log('Querying Database ...');

    setTimeout(() => {
      console.log('Query Complete');
      setNameData(nameDataFromDB);
    }, 5000);
  }

  return {
    nameData,
    setNameData,
  };
};

export default useMyForm;
