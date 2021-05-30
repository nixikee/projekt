import { AgreementSpecification } from "../models/agreement-specification";

export const AGREEMENT_SPECIFICATIONS: AgreementSpecification[] = [
    {
      //"type": "AgreementSpecification", 
      "href": "https://host:port/tmf-api/agreementManagement/v4/agreementSpecification/1140", 
      "id": "1140", 
      "name": "Moon Agreement Template", 
      "lifecycleStatus": "Approved", 
      "version": "2.0", 
      "validFor": 
      { 
        "startDateTime": "2018-06-12T00:00Z", 
        "endDateTime": "2019-01-11T00:00Z" 
      }, 
      "specificationCharacteristic": [ 
        { 
          "name": "fidelityProgram", 
          "configurable": true, 
          "valueType": "string" 
        } 
      ], 
      "relatedParty": [ 
        { 
          //"@referredType": "Organization", 
          "href": "https://host:port/tmf-api/partyManagement/v4/organization/2777", 
          "id": "2777", 
          "name": "John Doe", 
          "role": "bill receiver" 
        } 
      ]
    }
]