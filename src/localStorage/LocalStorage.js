function LocalStorage() {
    const prop = {
        key: ''
    }

    this.create = create;
    this.get = get;
    this.getProp = getProp;
    this.setProp = setProp;

    // this.getKey = function () {
    //     return prop.key;
    // }

    function create(keyStr, storageObject) {
        if (!localStorage.getItem(keyStr)) {
            localStorage.setItem(keyStr, JSON.stringify(storageObject));
        }

        prop.key = keyStr;

        return this;
    }

    function get() {
        return JSON.parse(localStorage.getItem(prop.key));
    }

    function getProp(propName) {
        const currentLocalStorage = JSON.parse(localStorage.getItem(prop.key));
        let propertyValue;

        Object.entries(currentLocalStorage).forEach(([key, value]) => {
            if (propName === key) {
                propertyValue = value;
                return;
            }
        });

        return propertyValue;
    }


    function setProp(propName, propValue) {
        const currentLocalStorage = JSON.parse(window.localStorage.getItem(prop.key));
        let checkProperty = 0;

        Object.entries(currentLocalStorage).forEach(([key, value]) => {
            if (propName === key) {
                currentLocalStorage[key] = propValue;
                checkProperty++;
                return;
            }
        });

        if (checkProperty === 0) {
            return false;
        } else {
            window.localStorage.removeItem(prop.key);
            window.localStorage.setItem(prop.key, JSON.stringify(currentLocalStorage));
            return true;
        }
    }
}


export default LocalStorage;

