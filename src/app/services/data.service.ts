import { Injectable, OnInit } from "@angular/core";

@Injectable({
  providedIn: "root"
})

export class DataService {
  database = [];

  constructor() {
    /* ====LOCALSTORAGE========
    Local storage stores data as key-value pairs, and the values are stored as "strings". 
    So, if we must JSON.stringify when we put them into LocalStorage and we must 'parse' the string into a valid object. when we retrieve it.
    */
    if (localStorage.database == null) {
      localStorage.setItem("database", JSON.stringify(this.data));
    }
  } //end constructor

  data = [
    {
      position: 1,
      fname: "jordi",
      lname: "cox",
      dob: "2020-07-11T13:00:00.000Z",
      licNo: "909090",
      expiryDate: "2020-08-11T14:00:00.000Z",
      dept: "Transport",
      LicClasses: [
        { name: "C ", description: "car" },
        { name: "R ", description: "motorcycles and scooters" }
      ]
    },

    {
      position: 2,
      fname: "peter",
      lname: "cox",
      dob: "1958-05-21T14:00:00.000Z",
      licNo: "178783",
      expiryDate: "2020-07-24T14:00:00.000Z",
      dept: "Marketing",
      LicClasses: [
        { name: "C ", description: "car" },
        {
          name: "MC ",
          description: "prime mover, low loader dolly and road trains"
        }
      ]
    },

    {
      position: 3,
      fname: "Betty",
      lname: "Gable",
      dob: "1974-03-29T14:00:00.000Z",
      licNo: "24321234",
      expiryDate: "2021-07-16T14:00:00.000Z",
      dept: "Marketing",
      LicClasses: [
        { name: "C ", description: "car" },
        { name: "LR ", description: "small buses or trucks" }
      ]
    },

    {
      position: 4,
      fname: "Frank",
      lname: "Zapper",
      dob: "2020-06-30T14:00:00.000Z",
      licNo: "343434",
      expiryDate: "2020-10-13T13:00:00.000Z",
      dept: "Finance",
      LicClasses: [
        { name: "HR ", description: "heavy rigid trucks or buses " },
        { name: "HC ", description: "heavy articulated vehicles" },
        { name: "MC ", description: "prime mover, low loader dolly and road trains"
        }
      ]
    },

    {
      position: 5,
      fname: "Mary",
      lname: "Shelly",
      dob: "2020-07-04T14:00:00.000Z",
      licNo: "454545",
      expiryDate: "2020-07-20T14:00:00.000Z",
      dept: "Finance",
      LicClasses: [
        { name: "C ", description: "car" },
        { name: "HC ", description: "heavy articulated vehicles" }
      ]
    },

    {
      position: 6,
      fname: "Minie",
      lname: "Craft",
      dob: "2020-07-09T14:00:00.000Z",
      licNo: "123456",
      expiryDate: "2020-07-30T14:00:00.000Z",
      dept: "Finance",
      LicClasses: [
        { name: "C ", description: "car" },
        {
          name: "MC ", description: "prime mover, low loader dolly and road trains"
        }
      ]
    },

    {
      position: 7,
      fname: "John",
      lname: "Milton",
      dob: "1958-07-09T14:00:00.000Z",
      licNo: "333333",
      expiryDate: "2021-08-30T14:00:00.000Z",
      dept: "Marketing",
      LicClasses: [
        { name: "C ", description: "car" },
        { name: "R ", description: "motorcycles and scooters" }
      ]
    },

    {
      position: 8,
      fname: "Super",
      lname: "Man",
      dob: "1975-10-09T14:00:00.000Z",
      licNo: "12121212",
      expiryDate: "2020-07-15T14:00:00.000Z",
      dept: "Transport",
      LicClasses: [
        { name: "HC ", description: "heavy articulated vehicles" },
        { name: "MC ", description: "prime mover, low loader dolly and road trains"
        }
      ]
    }
  ];

  getLicenceClasses() {
    let LicClasses = [
      { name: "C ", description: "car", selected: false  },
      { name: "R ", description: "motorcycles and scooters", selected: false  },
      { name: "LR ", description: "small buses or trucks", selected: false  },
      { name: "MR ", description: "medium rigid trucks or buses" , selected: false },
      { name: "HR ", description: "heavy rigid trucks or buses ", selected: false  },
      { name: "HC ", description: "heavy articulated vehicles" , selected: false },
      { name: "MC ", description: "prime mover, low loader dolly and road trains", selected: false }
    ];
    return LicClasses;
  }

  // FUNCTIONS
  getData() {
    let data = JSON.parse(localStorage.getItem("database"));
    console.log(data);
    return data;
  }

  getRecord(id) {
    let data = JSON.parse(localStorage.getItem("database"));
    let employee = data[id];
    console.log("here " + data[id].fname )
    return employee;
  }

  add(formData) {
    let database = JSON.parse(localStorage.getItem("database"));
    database.push(formData);
    localStorage.setItem("database", JSON.stringify(database));
  }
} // end class
