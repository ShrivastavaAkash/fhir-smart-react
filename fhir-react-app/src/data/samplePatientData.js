export default {
  resourceType: "Patient",
  id: "4342010",
  meta: { versionId: "25", lastUpdated: "2019-07-22T08:19:55.000Z" },
  text: {
    status: "generated",
    div:
      '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Patient</b></p><p><b>Status</b>: Active</p><p><b>Name</b>: SMART, JOE</p><p><b>DOB</b>: Apr 29, 1976</p><p><b>Administrative Gender</b>: Male</p><p><b>Marital Status</b>: Married</p></div>'
  },
  extension: [
    {
      url: "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",
      extension: [
        {
          url: "ombCategory",
          valueCoding: {
            system: "urn:oid:2.16.840.1.113883.6.238",
            code: "2186-5",
            display: "Non Hispanic or Latino",
            userSelected: false
          }
        },
        { url: "text", valueString: "Not Hispanic or Latino" }
      ]
    }
  ],
  identifier: [
    {
      id: "CI-6810251-0",
      use: "usual",
      type: {
        coding: [
          {
            system:
              "https://fhir.cerner.com/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/codeSet/4",
            code: "10",
            display: "MRN",
            userSelected: true
          },
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0203",
            code: "MR",
            display: "Medical record number",
            userSelected: false
          }
        ],
        text: "MRN"
      },
      system: "urn:oid:1.1.1.1.1.1",
      value: "10002702",
      period: { start: "2016-06-22T21:06:58.000Z" }
    },
    {
      id: "CI-8934220-2",
      use: "usual",
      type: {
        coding: [
          {
            system:
              "https://fhir.cerner.com/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/codeSet/4",
            code: "670843",
            display: "Messaging",
            userSelected: true
          },
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0203",
            code: "U",
            display: "Unspecified identifier",
            userSelected: false
          }
        ],
        text: "Messaging"
      },
      system: "urn:oid:2.16.840.1.113883.3.13.8",
      value: "FB4A2EB3BCB34B208FEEAFA27A7BD252",
      period: { start: "2018-09-13T16:44:32.000Z" }
    },
    {
      id: "CI-7476209-3",
      use: "usual",
      type: {
        coding: [
          {
            system:
              "https://fhir.cerner.com/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/codeSet/4",
            code: "36322657",
            display: "Federated Person Principal",
            userSelected: true
          },
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0203",
            code: "AN",
            display: "Account number",
            userSelected: false
          }
        ],
        text: "Federated Person Principal"
      },
      system: "urn:oid:2.16.840.1.113883.3.13.6",
      value:
        "URN:CERNER:IDENTITY-FEDERATION:REALM:687F29DD-69DD-4DE5-ACB1-FD8A2241EF3A:PRINCIPAL:UY4572B79XK",
      period: { start: "2016-01-01T10:00:00.000Z" }
    },
    {
      id: "CI-7476210-4",
      use: "usual",
      type: {
        coding: [
          {
            system:
              "https://fhir.cerner.com/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/codeSet/4",
            code: "36322657",
            display: "Federated Person Principal",
            userSelected: true
          },
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0203",
            code: "AN",
            display: "Account number",
            userSelected: false
          }
        ],
        text: "Federated Person Principal"
      },
      system: "urn:oid:2.16.840.1.113883.3.13.6",
      value:
        "urn:cerner:identity-federation:realm:687f29dd-69dd-4de5-acb1-fd8a2241ef3a:principal:UY4572B79XK",
      period: { start: "2016-01-01T10:00:00.000Z" }
    },
    {
      id: "CI-9064212-5",
      use: "usual",
      type: {
        coding: [
          {
            system:
              "https://fhir.cerner.com/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/codeSet/4",
            code: "36322657",
            display: "Federated Person Principal",
            userSelected: true
          },
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0203",
            code: "AN",
            display: "Account number",
            userSelected: false
          }
        ],
        text: "Federated Person Principal"
      },
      system: "urn:oid:2.16.840.1.113883.3.13.6",
      value:
        "URN:CERNER:IDENTITY-FEDERATION:REALM:2E882EFF-FA72-4882-ADC8-A685F7D2BFA6:PRINCIPAL:XYZ1234"
    },
    {
      id: "CI-9070210-6",
      use: "usual",
      type: {
        coding: [
          {
            system:
              "https://fhir.cerner.com/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/codeSet/4",
            code: "36322657",
            display: "Federated Person Principal",
            userSelected: true
          },
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0203",
            code: "AN",
            display: "Account number",
            userSelected: false
          }
        ],
        text: "Federated Person Principal"
      },
      system: "urn:oid:2.16.840.1.113883.3.13.6",
      value:
        "URN:CERNER:IDENTITY-FEDERATION:REALM:2E882EFF-FA72-4882-ADC8-A685F7D2BFA6:PRINCIPAL:XYIWIE1234"
    }
  ],
  active: true,
  name: [
    {
      id: "CI-4342010-0",
      use: "official",
      text: "SMART, JOE",
      family: "SMART",
      given: ["JOE"],
      period: { start: "2016-06-22T21:06:59.000Z" }
    }
  ],
  telecom: [
    {
      id: "CI-PH-2023942-0",
      system: "phone",
      value: "9139898765",
      use: "home",
      rank: "1",
      period: { start: "2017-06-27T21:47:16.000Z" }
    },
    {
      id: "CI-PH-2023944-1",
      system: "phone",
      value: "9137876555",
      use: "mobile",
      rank: "1",
      period: { start: "2017-06-27T21:47:16.000Z" }
    },
    {
      id: "CI-EM-2399940-0",
      system: "email",
      value: "kathy.pickering@cerner.com",
      use: "home",
      rank: "1",
      period: { start: "2018-09-13T16:43:28.000Z" }
    }
  ],
  gender: "male",
  birthDate: "1976-04-29",
  address: [
    {
      id: "CI-1925899-0",
      use: "home",
      text: "1234 Blvd\nOverland Park, KS 66213\nUSA",
      line: ["1234 Blvd"],
      city: "Overland Park",
      district: "Johnson",
      state: "KS",
      postalCode: "66213",
      country: "USA",
      period: { start: "2017-06-27T21:47:16.000Z" }
    }
  ],
  maritalStatus: {
    coding: [
      {
        system:
          "https://fhir.cerner.com/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/codeSet/38",
        code: "309237",
        display: "Married",
        userSelected: true
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
        code: "M",
        display: "Married",
        userSelected: false
      }
    ],
    text: "Married"
  },
  contact: [
    {
      relationship: [
        {
          coding: [
            {
              system:
                "https://fhir.cerner.com/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/codeSet/351",
              code: "36327661",
              display: "Authorized Representative",
              userSelected: true
            }
          ],
          text: "Authorized Representative"
        }
      ],
      name: {
        id: "CI-4342009-0",
        use: "official",
        text: "SHANKAR, Ganesh Jayaraman",
        family: "SHANKAR",
        given: ["Ganesh", "Jayaraman"],
        period: { start: "2016-06-22T20:43:05.000Z" }
      },
      telecom: [
        {
          system: "phone",
          value: "9035768555",
          use: "home",
          rank: "1",
          period: { start: "2019-09-18T20:48:19.000Z" }
        },
        {
          system: "email",
          value: "kathy.pickering@cerner.com",
          use: "home",
          rank: "1",
          period: { start: "2018-09-13T16:37:32.000Z" }
        }
      ],
      gender: "female",
      period: {
        start: "2017-06-09T13:47:35.000Z",
        end: "2018-05-17T20:51:36.000Z"
      }
    }
  ],
  communication: [
    {
      language: {
        coding: [
          {
            system:
              "https://fhir.cerner.com/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/codeSet/36",
            code: "151",
            display: "English",
            userSelected: true
          },
          {
            system: "urn:ietf:bcp:47",
            code: "en",
            display: "English",
            userSelected: false
          }
        ],
        text: "English"
      },
      preferred: true
    }
  ],
  generalPractitioner: [
    {
      id: "CI-6810257-15",
      reference: "Practitioner/1912007",
      display: "McCurdy, Michael"
    }
  ]
};
