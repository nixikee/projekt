import { Agreement } from "../models/agreement";

export const AGREEMENTS: Agreement[] = [
    {
      href: "https://host:port/tmf-api/agreementManagement/v4/agreement/40",
      id: "40",
      name: "Moon",
      status: "Pending",
      documentNumber: "97867",
      version: "1.0",
      agreementSpecification: {
        href: "https://host:port/tmf-api/agreementManagement/v4/agreementSpecification/1140",
        id: "1140",
        name: "Moon Agreement Template"
      },
      engagedParty: [ 
        { 
          //"@type": "Organization", 
          "href": "https://host:port/tmf-api/partyManagement/v4/organization/500", 
          "id": "500", 
          "name": "Happy Travellers" 
        } 
      ], 
      characteristic: [ 
        { 
          "name": "fidelityProgram", 
          "value": "premium", 
          "valueType": "string" 
        } 
      ], 
      /*"relatedParty": [ 
        { 
          "href": "https://host:port/tmf-api/partyManagement/v4/organization/2777", 
          "id": "2777",
          "name": "John Doe", 
          "role": "bill receiver" 
        }
      ],*/
      agreementItem: [ 
        { 
          "productOffering": [{ 
            "href": "https://host:port/tmf-api/productCatalogManagement/v4/productOffering/61", 
            "name": "ChristmasToy" 
          }], 
          "termOrCondition": [{ 
            "id": "1", 
            "description": "delivery should be done in France"
          }]
        }
      ]
    },
    {

      href: "https://host:port/tmf-api/agreementManagement/v4/agreement/40",
      id: "1",
      name: "Moony",
      status: "Pendings",
      documentNumber: "97868",
      version: "1.1",
      agreementSpecification: {
        href: "https://host:port/tmf-api/agreementManagement/v4/agreementSpecification/1140",
        id: "1141",
        name: "Moony Agreement Template"
      },
      engagedParty: [ 
        { 
          //"@type": "Organization", 
          "href": "https://host:port/tmf-api/partyManagement/v4/organization/500", 
          "id": "501", 
          "name": "Happy Traveller" 
        } 
      ], 
      characteristic: [ 
        { 
          "name": "fidelityPrograms", 
          "value": "premiums", 
          "valueType": "strings" 
        } 
      ], 
      /*"relatedParty": [ 
        { 
          "href": "https://host:port/tmf-api/partyManagement/v4/organization/2777", 
          "id": "2778",
          "name": "John Depp", 
          "role": "billy receiver" 
        }
      ], */
      agreementItem: [ 
        { 
          "productOffering": [{ 
            "href": "https://host:port/tmf-api/productCatalogManagement/v4/productOffering/61", 
            "name": "ChristmasToys" 
          }], 
          "termOrCondition": [{ 
            "id": "2", 
            "description": "delivery should be done in Frances"
          }]
        }
      ]
    }
  ];