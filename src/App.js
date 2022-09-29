import './App.css';
import jsonData from "./demo.json";




function App() {
  const data = jsonData.resFormat;


  const resComplexFormat = {
    mnoRequestType: "",
    responseRecord: [
      {
        bts: {
          band: "",
          btsId: "",
          g3g4g: "",
          siteId: "",
          btsType: "",
          cgiEcgi: "",
          cellCode: "",
          cellName: "",
          latitude: "",
          direction: "",
          longitude: ""
        },
        imsi: "",
        btsId: "",
        partyA: "",
        partyB: "",
        btsName: "",
        cellType: "",
        ciStartA: "",
        operator: "",
        eventTime: "",
        lacStartA: "",
        mccStartA: "",
        mncStartA: "",
        timeStamp: "",
        usageType: "",
        imeiNumber: "",
        responseId: "",
        callDuration: "",
        providerName: "",
        responseTime: "",
        partyBOriginal: "",
        searchIdentifier: "",
        responseTimeEpoch: ""
      }
    ],
    numberofRecordsFound: "",
    operator: ""
  }

  const resEasyFormat = {
    name: "",
    age: "",
    gender: ""
  }

  function isObject(o) {
    return o instanceof Object && o.constructor === Object;
  }

  const objectArrayDifferentiate = (data) => {
    if (Array.isArray(data)) {
      return data;
    } else if (isObject(data)) {
      return Object.keys(data)
    }
    return data;
  }

  const generateCheckbox = (resFormat) => {
    // Checking Array/Object
    let objToArray = objectArrayDifferentiate(resFormat);

    // Is Object/Array
    if (Array.isArray(objToArray)) {
      let objLen = objToArray.length;
      for (let i = 0; i < objLen; i++) {
        if (Array.isArray(objectArrayDifferentiate(resFormat[objToArray[i]]))) {
          console.log(objToArray[i]);//Print Only
          generateCheckbox(resFormat[objToArray[i]])
        } else {
          !Array.isArray(objectArrayDifferentiate(objToArray[i])) && console.log(objToArray[i]);//Print only
          generateCheckbox(objToArray[i])
        }

      }
    }
  }

  generateCheckbox(resComplexFormat)


  return (
    <div className="App">
      <h1>Deeply nested Object</h1>
    </div>
  );
}

export default App;
