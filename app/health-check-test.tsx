import {
    initialize,
    requestPermission,
    readRecords,
    getGrantedPermissions,
} from 'react-native-health-connect';

/*
    pasii pe care i-am urmat i-am gasit aici: https://matinzd.github.io/react-native-health-connect/docs/get-started

    comenzi rulate:

    bun add react-native-health-connect 
    bun add expo-health-connect expo-build-properties -d
    bun expo prebuild
*/

export const readSampleData = async () => {

    // initialize the client
    const isInitialized = await initialize();

    console.log('isInitialized', isInitialized);

    // request permissions
    const permissions = await requestPermission([
        {
            accessType: 'read',
            recordType: 'Distance',
        },
    ])
    console.log('Granted permissions ', { permissions });

    const grantedPermissions = await getGrantedPermissions();
    console.log('Granted permissions', { grantedPermissions });

    // read data
    try {
        const records = await readRecords('Distance', {
            timeRangeFilter: {
                operator: 'between',
                startTime: '2024-08-08T19:50:00.000Z',
                endTime: '2024-08-08T19:51:00.000Z'
            }
        });
        console.log('records', records);
    } catch (e) {
        console.error(e);
    }

    // records
    /*
    [
  {
    "distance": {
      "inFeet": 59.05511556804336,
      "inInches": 708.6613868165205,
      "inKilometers": 0.017999999225139618,
      "inMeters": 17.999999225139618,
      "inMiles": 0.011184708778219405
    },
    "endTime": "2024-08-08T19:51:00Z",
    "metadata": {
      "clientRecordId": null,
      "clientRecordVersion": 0,
      "dataOrigin": "com.fitbit.FitbitMobile",
      "device": 0,
      "id": "832a864b-1122-403b-bf6b-da75d85d058c",
      "lastModifiedTime": "2024-08-08T22:40:18.356Z",
      "recordingMethod": 0
    },
    "startTime": "2024-08-08T19:50:00Z"
  }
]
    */
};