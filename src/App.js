import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const handleClick = (e, value) => {
    console.log(e.name, value);
  }
  let domContent = []
  const resComplexFormat = {
    mnoRequestType: "",
    responseRecord: [
      {
        bts: {
          band: {
            bandOne: "",
            bandTwo: ""
          },

          btsId: "",
          g3g4g: "",
          siteId: "",
          btsType: "",
          cgiEcgi: "",
          cellCode: "",
          cellName: "",
          latitude: "",
          direction: "",
          longitude: "",
          veryLong: ["Five", "Three"]
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
    operator: "",
    arafatVai: {
      vai1: "",
      vai2: ""
    }
  }


  const smallObject = {
    bts: {
      band: "",
      others: {
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
      another: {
        sisters: "",
        others: "",
        brothers: {
          elder: "",
          younger: ""
        }
      }
    }
  }



  function isObject(o) {
    return o instanceof Object && o.constructor === Object;
  }

  const getKeyArray = (data) => {
    if (Array.isArray(data)) {
      return Object.keys(data[0]);
    } else if (isObject(data)) {
      return Object.keys(data)
    }
    return data;
  }

  const style = { color: { color: "red" } }

  let content = ``;
  let marginCounter = 0;



  const generateCheckbox = (data, root = '_') => {
    // Checking Array/Object
    let keyArray = getKeyArray(data);

    // Is Object/Array
    if (Array.isArray(keyArray)) {
      keyArray.sort()
      let objLen = keyArray.length;

      for (let i = 0; i < objLen; i++) {
        const key = keyArray[i];
        let _root = root + '_' + key;
        let nested = data[key]
        console.log(key, '=', marginCounter)

        // Creating Array
        domContent.push({ value: key, label: key, children: '', name: key, margin: marginCounter, id: _root })

        if (Array.isArray(nested))
          nested = nested[0]

        if (isObject(nested)) {
          marginCounter++;

          generateCheckbox(nested, _root)
        }

      }
    }
    marginCounter--;
  }


  // Function Call
  generateCheckbox(resComplexFormat);

  // Create Markup
  function createMarkup() {
    return { __html: content };
  }

  console.log(domContent);
  return (
    <div className="container">
      <h1>Deeply nested Object</h1>

      {
        domContent?.length > 0 && domContent.map((item, index) => (
          <div className={`left-${item.margin}`}>
            <input type="checkbox" name={item.id} onChange={(e) => handleClick(e.target, 12)} /> <span>{item.name}</span>
          </div>
        )
        )
      }
    </div>
  );
}

export default App;
