import "bootstrap/dist/css/bootstrap.min.css";
import _ from "lodash";
import { useState } from "react";
import { resComplexFormat } from "./demoObject";
import getKeyArray from "./utils/getKeyArray";
import isInTheState from "./utils/isChecked";
import isObject from "./utils/isObject";
import prepareObjectForAdd from "./utils/prepareObjectForAdd";
import prepareObjectForRemove from "./utils/prepareObjectForRemove";
import stringToArray from "./utils/stringToArray";


function App() {
  const response = resComplexFormat;
  const [selectedKeys, setSelectedKeys] = useState({});
  // Content Holder
  let content = []
  let treeSteps = 0;







  // Handle Click
  const handleClick = (e, itemObj) => {
    const { name, checked } = e
    const copyObject = _.cloneDeep(selectedKeys);
    const keys = stringToArray(e.name);
    if (checked === false) {
      // REMOVING from STATE
      // For Root Element only, 
      setSelectedKeys({ ...prepareObjectForRemove(copyObject, keys, itemObj) })
    } else if (checked === true) {
      // ADDING IN STATE
      setSelectedKeys({ ...prepareObjectForAdd(copyObject, keys, itemObj) })

    }
    // console.log(name, checked, itemObj);

  }


  const generateCheckbox = (data, root = '_') => {
    // Checking Array/Object
    let keyArray = getKeyArray(data);

    // Is Object/Array
    if (Array.isArray(keyArray)) {
      keyArray.sort()
      let objLen = keyArray.length;

      for (let i = 0; i < objLen; i++) {
        const key = keyArray[i];
        let _root = root === '_' ? root + key : root + '_' + key;
        let nested = data[key]
        // console.log(key, '=', treeSteps)

        // Creating Array
        content.push({
          id: _root,
          value: key,
          label: key,
          name: key,
          children: isObject(nested) ? nested : "",
          margin: treeSteps,
          isChecked: isInTheState(_root, selectedKeys) //Checking in the state, its returns true or false, default false
        })

        if (Array.isArray(nested))
          nested = nested[0]

        if (isObject(nested)) {
          treeSteps++;
          generateCheckbox(nested, _root)
        }

      }
    }
    treeSteps--;
  }


  // Function Call


  generateCheckbox(response);


  return (
    <div className="container">
      <h1>Deeply NESTED Object</h1>

      {
        content?.length > 0 && content.map((item, index) => (
          <div key={index} className={`left-${item.margin}`}>
            <input
              type="checkbox"
              name={item.id}
              checked={item.isChecked}
              onChange={(e) => handleClick(e.target, item)}
            /> <span>{item.name}</span>
          </div>
        )
        )
      }
    </div>
  );
}

export default App;
