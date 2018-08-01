test.skip('Unecessary test because CRA does not allow with changing jest settings and I can not avoid .js files from being parsed for tests and jest compains that there should be alteast 1 test per file. WEIRD.', () => {
  expect(true).toBe(true)
})

export const MOCK_INFINITE_LOOP_INDUCED_FIELD_CHANGE_EFFECTS = {
  inspectedAt: [
    {
      name: 'branch',
      path: ['fields', 'branch'],
      value: (newValue, state) => newValue.toLowerCase(),
      editable: (newValue, state) => true,
      readable: (newValue, state) => true,
      required: (newValue, state) => false,
      otherProps: (newValue, state) => ({
        placeholder: newValue === 'Madrid' ? 'Branch Name' : 'Branch'
      })
    },
    {
      name: 'sellerCode',
      path: ['fields', 'sellerCode'],
      value: (newValue, state) => 'State Farm',
      editable: (newValue, state) => false,
      readable: (newValue, state) => true,
      required: (newValue, state) => false
    }
  ],
  branch: [
    {
      name: 'claimType',
      path: ['fields', 'claimType'],
      value: (newValue, state) => newValue.toUpperCase(),
      editable: (newValue, state) => false,
      readable: (newValue, state) => true,
      required: (newValue, state) => false
    }
  ],
  claimType: [
    {
      name: 'claim',
      path: ['fields', 'claim'],
      value: (newValue, state) => '',
      editable: (newValue, state) => true,
      readable: (newValue, state) => true,
      required: (newValue, state) => false
    }
  ],
  claim: [
    {
      name: 'inspectedAt',
      path: ['fields', 'inspectedAt'],
      value: (newValue, state) => '',
      editable: (newValue, state) => true,
      readable: (newValue, state) => true,
      required: (newValue, state) => false
    }
  ]
}

export const MOCK_FIELD_CHANGE_EFFECTS = {
  inspectedAt: [
    {
      name: 'branch',
      path: ['fields', 'branch'],
      value: (newValue, state) => newValue.toLowerCase(),
      editable: (newValue, state) => true,
      readable: (newValue, state) => true,
      required: (newValue, state) => false,
      otherProps: (newValue, state) => ({
        placeholder: newValue === 'Madrid' ? 'Branch Name' : 'Branch'
      })
    },
    {
      name: 'sellerCode',
      path: ['fields', 'sellerCode'],
      value: (newValue, state) => 'State Farm',
      editable: (newValue, state) => false,
      readable: (newValue, state) => true,
      required: (newValue, state) => false
    }
  ],
  branch: [
    {
      name: 'claimType',
      path: ['fields', 'claimType'],
      value: (newValue, state) => newValue.toUpperCase(),
      editable: (newValue, state) => false,
      readable: (newValue, state) => true,
      required: (newValue, state) => false
    }
  ],
  claimType: [
    {
      name: 'claim',
      path: ['fields', 'claim'],
      value: (newValue, state) => '',
      editable: (newValue, state) => true,
      readable: (newValue, state) => true,
      required: (newValue, state) => false
    }
  ]
}

export const MOCK_STATE_DATA = {
  fields: {
    color: {
      value: 'White (HPI)',
      editable: true,
      readable: true,
      required: false
    },
    year: '1992',
    make: {
      value: 'BMW',
      editable: true,
      readable: true,
      required: false
    },
    model: {
      value: '328i',
      editable: true,
      readable: true,
      required: false
    },
    trim: 'Lmtd',
    plateNumber: 'JFHS-123',
    inspectedAt: {
      value: 'London',
      editable: true,
      readable: true,
      required: false
    },
    lot: {
      value: '1231331',
      editable: true,
      readable: true,
      required: false
    },
    branch: {
      value: 'New Castle',
      editable: true,
      readable: true,
      required: false
    },
    claimType: {
      value: 'XYZ',
      editable: true,
      readable: true,
      required: false
    },
    company: {
      value: 'Geico',
      editable: true,
      readable: true,
      required: false
    },
    sellerCode: {
      value: 'GEK',
      editable: true,
      readable: true,
      required: false
    },
    claim: {
      value: '1231441',
      editable: true,
      readable: true,
      required: false
    },
    incidentDate: {
      value: '12/02/1992',
      editable: true,
      readable: true,
      required: false
    },
    insured: {
      value: 'Y',
      editable: true,
      readable: true,
      required: false
    },
    VRN: {
      value: 'SJBDBK-283-0816230\nILYFLSIHD-9587-4874\nHVLHBL-123123-8675',
      editable: true,
      readable: true,
      required: false
    },
    VIN: {
      value: 'KSJBDKJBSF9575952384SDSD',
      editable: true,
      readable: true,
      required: false
    },
    dateOfRegistration: {
      value: '12/2/1992 (HPI)',
      editable: true,
      readable: true,
      required: false
    },
    bodyType: {
      value: 'Saloon 4 Door (AWF)\n4 Door Saloon (HPI)',
      editable: true,
      readable: true,
      required: false
    },
    engineCC: {
      value: '1955 CC (HPI)',
      editable: true,
      readable: true,
      required: false
    },
    transmission: {
      value: '6 Speed Manul Petrol (AWF)\n6 Speed Manual Petrol (HPI)',
      editable: true,
      readable: true,
      required: false
    },
    mileage: {
      value: '<100000',
      editable: true,
      readable: true,
      required: false
    },
    fuelType: {
      value: 'Petrol (AWF)\nPetrol (HPI)',
      editable: true,
      readable: true,
      required: false
    },
    keeperChange: {
      value: '08/09/2014 (HPI)',
      editable: true,
      readable: true,
      required: false
    },
    formerKeepers: {
      value: '1 (HPI)',
      editable: true,
      readable: true,
      required: false
    },
    grossVehicleWeight: {
      value: '<1000',
      editable: true,
      readable: true,
      required: false
    },
    nsr: {
      value: 12,
      editable: true,
      readable: true,
      required: false
    },
    nsf: {
      value: 15,
      editable: true,
      readable: true,
      required: false
    },
    osf: {
      value: 10,
      editable: true,
      readable: true,
      required: false
    },
    staticSteeringChecks: {
      value: 'fullAccess',
      editable: true,
      readable: true,
      required: false
    },
    staticBrakeChecks: {
      value: 'noAccess',
      editable: true,
      readable: true,
      required: false
    },
    keys: {
      value: 'Y',
      editable: true,
      readable: true,
      required: false
    },
    vehicleStarts: {
      value: 'N',
      editable: true,
      readable: true,
      required: false
    },
    vehicleComments: {
      value: 'Vehicle in moderate condition.',
      editable: true,
      readable: true,
      required: false
    },
    optionsFitted: [
      {
        id: 1,
        disabled: false,
        primaryText: '7 Seats'
      },
      {
        id: 2,
        disabled: false,
        primaryText: 'Metallic Pain'
      },
      {
        id: 3,
        disabled: false,
        primaryText: 'Headlight Wash'
      },
      {
        id: 4,
        disabled: false,
        primaryText: 'Headlight Upgrade',
        secondaryText: 'Does not include Wash.'
      },
      {
        id: 5,
        disabled: false,
        primaryText: 'Leather Interior'
      },
      {
        id: 6,
        disabled: false,
        primaryText: 'Heated Seats'
      },
      {
        id: 7,
        disabled: false,
        primaryText: 'Cooled Seats'
      },
      {
        id: 8,
        disabled: false,
        primaryText: 'SAT Nav System'
      },
      {
        id: 9,
        disabled: false,
        primaryText: 'Rear Spoiler'
      },
      {
        id: 10,
        disabled: false,
        primaryText: 'Audio CD Player'
      }
    ],
    selectedOptions: [
      {
        id: 11,
        disabled: false,
        primaryText: 'Radio Casette'
      }
    ],
    exterior: {
      value: 'na',
      editable: true,
      readable: true,
      required: false
    },
    interior: {
      value: 'na',
      editable: true,
      readable: true,
      required: false
    },
    primaryDamage: {
      value: '',
      editable: true,
      readable: true,
      required: false
    },
    secondaryDamage: {
      value: '',
      editable: true,
      readable: true,
      required: false
    },
    damageType: {
      value: 'burn',
      editable: true,
      readable: true,
      required: false
    },
    structuralDamage: {
      value: 'N',
      editable: true,
      readable: true,
      required: false
    },
    damageSeverity: {
      value: 'light',
      editable: true,
      readable: true,
      required: false
    },
    airbagsDeployed: {
      value: 'Y',
      editable: true,
      readable: true,
      required: false
    },
    frontSeatsCondition: {
      value: 'heavilySoiled',
      editable: true,
      readable: true,
      required: false
    },
    rearSeatCondition: {
      value: 'na',
      editable: true,
      readable: true,
      required: false
    },
    floodDamage: {
      value: 'N',
      editable: true,
      readable: true,
      required: false
    },
    preAccidentDamage: {
      value: 'N',
      editable: true,
      readable: true,
      required: false
    },
    preAccidentDamageDesc: {
      value: '',
      editable: true,
      readable: true,
      required: false
    },
    conditionNotes: {
      value: '',
      editable: true,
      readable: true,
      required: false
    },
    natureOfDamage: {
      value: '',
      editable: true,
      readable: true,
      required: false
    },
    structuralDamageDesc: {
      value: '',
      editable: true,
      readable: true,
      required: false
    },
    modifications: [
      {
        id: 1,
        disabled: false,
        primaryText: 'Body Kit'
      },
      {
        id: 2,
        disabled: false,
        primaryText: 'Suspension'
      },
      {
        id: 3,
        disabled: false,
        primaryText: 'Audio'
      },
      {
        id: 4,
        disabled: false,
        primaryText: 'Induction Kit',
        secondaryText: 'Air Filter'
      },
      {
        id: 5,
        disabled: false,
        primaryText: 'Exhaust'
      },
      {
        id: 6,
        disabled: false,
        primaryText: 'Stickers / Decals'
      },
      {
        id: 7,
        disabled: false,
        primaryText: 'Interior',
        secondaryText: 'Steering Wheel'
      },
      {
        id: 9,
        disabled: false,
        primaryText: 'Engine Parts',
        secondaryText: 'Hoses'
      }
    ],
    selectedModifications: [
      {
        id: 8,
        disabled: false,
        primaryText: 'Alloy Wheels'
      }
    ],
    mileageUsedForValuation: {
      value: '<750000',
      editable: true,
      readable: true,
      required: false
    },
    previousTotalLoss: {
      value: 'N',
      editable: true,
      readable: true,
      required: false
    },
    autoTraderInternetValuation: {
      value: 9299,
      editable: true,
      readable: true,
      required: false
    },
    finalValuation: {
      value: 12331,
      editable: true,
      readable: true,
      required: false
    },
    glassCharges: [
      {
        name: 'glassMVATrade',
        primaryText: "Glass's MVA Trade (Trans Retail)",
        disabled: false,
        value: 5
      },
      {
        name: 'glassMVATransRetail',
        primaryText: "Glass's MVA (Trans Retail)",
        disabled: false,
        value: 10
      },
      {
        name: 'adjForMileage',
        primaryText: 'Adjustment for Mileage (Trans Retail)',
        disabled: false,
        value: 38.32
      },
      {
        name: 'prevTotalLoss',
        primaryText: 'Previous Total Loss (Trans Retail) (-20%)',
        disabled: true,
        value: 52
      },
      {
        name: 'adjForCondition',
        primaryText: 'Adjustment for Condition (Trans Retail)',
        disabled: false,
        value: 22
      },
      {
        name: 'MOTDeduct',
        primaryText: 'MOT Deduct (Trans Retail)',
        disabled: false,
        value: 12
      },
      {
        name: 'engAdjFlassValudation',
        primaryText: 'Engineer Adjusted Glass Valuation (Trans Retail)',
        disabled: true,
        value: 199.99
      },
      {
        name: 'total',
        primaryText: {
          key: null,
          ref: null,
          props: {
            label: 'Total'
          },
          _owner: null,
          _store: {}
        },
        disabled: true,
        value: 339.31
      }
    ],
    capCharges: [
      {
        name: 'capMVATrade',
        primaryText: "CAP's MVA Trade (Trans Retail)",
        disabled: false,
        value: 5
      },
      {
        name: 'capMVATransRetail',
        primaryText: "CAP's MVA (Trans Retail)",
        disabled: false,
        value: 10
      },
      {
        name: 'adjForMileage',
        primaryText: 'Adjustment for Mileage (Trans Retail)',
        disabled: false,
        value: 38.32
      },
      {
        name: 'prevTotalLoss',
        primaryText: 'Previous Total Loss (Trans Retail) (-20%)',
        disabled: true,
        value: 52
      },
      {
        name: 'adjForCondition',
        primaryText: 'Adjustment for Condition (Trans Retail)',
        disabled: false,
        value: 22
      },
      {
        name: 'MOTDeduct',
        primaryText: 'MOT Deduct (Trans Retail)',
        disabled: false,
        value: 12
      },
      {
        name: 'engAdjFlassValudation',
        primaryText: 'Engineer Adjusted CAP Valuation (Trans Retail)',
        disabled: true,
        value: 199.99
      },
      {
        name: 'total',
        primaryText: {
          key: null,
          ref: null,
          props: {
            label: 'Total'
          },
          _owner: null,
          _store: {}
        },
        disabled: true,
        value: 339.31
      }
    ],
    labor: {
      value: 123,
      editable: true,
      readable: true,
      required: false
    },
    materials: {
      value: 331,
      editable: true,
      readable: true,
      required: false
    },
    parts: {
      value: 645,
      editable: true,
      readable: true,
      required: false
    },
    additional: {
      value: 11,
      editable: true,
      readable: true,
      required: false
    },
    specialist: {
      value: 1244,
      editable: true,
      readable: true,
      required: false
    },
    subTotal: {
      value: 11,
      editable: true,
      readable: true,
      required: false
    },
    VAT: {
      value: 87,
      editable: true,
      readable: true,
      required: false
    },
    totalVAT: {
      value: 12630,
      editable: true,
      readable: true,
      required: false
    },
    deductionDesc: {
      value: '',
      editable: true,
      readable: true,
      required: false
    },
    engineersRecommendation: {
      value: 'na',
      editable: true,
      readable: true,
      required: false
    },
    currentCategory: {
      value: 'na',
      editable: true,
      readable: true,
      required: false
    },
    costOfRepair: {
      value: 32,
      editable: true,
      readable: true,
      required: false
    },
    categoryJustifications: {
      value: '',
      editable: true,
      readable: true,
      required: false
    },
    notes: {
      value: '',
      editable: true,
      readable: true,
      required: false
    },
    engineer: {
      value: 'Brad Pitt',
      editable: true,
      readable: true,
      required: false
    },
    reportDate: {
      value: '12/02/2016',
      editable: true,
      readable: true,
      required: false
    },
    reasons: [
      {
        id: 1,
        disabled: false,
        primaryText: 'Fire Wall / Front Bulk Head'
      },
      {
        id: 2,
        disabled: false,
        primaryText: 'Front Header Rail'
      },
      {
        id: 3,
        disabled: false,
        primaryText: 'Side Cant Rail'
      },
      {
        id: 4,
        disabled: false,
        primaryText: 'Rear Header Rail'
      },
      {
        id: 5,
        disabled: false,
        primaryText: 'Rear Cross Member'
      },
      {
        id: 6,
        disabled: false,
        primaryText: 'Rear Inner Wing'
      },
      {
        id: 7,
        disabled: false,
        primaryText: 'Rear Wheel Housing Extension'
      },
      {
        id: 8,
        disabled: false,
        primaryText: 'B Post'
      },
      {
        id: 9,
        disabled: false,
        primaryText: 'Sill'
      },
      {
        id: 10,
        disabled: false,
        primaryText: 'A Post'
      }
    ],
    selectedReasons: [
      {
        id: 11,
        disabled: false,
        primaryText: 'Front Inner Wing Support'
      }
    ],
    files: [
      {
        original: 'https://c-static-qa.copart.com/v1/AUTH_svc.qdoc00001/PIX29/0ccebeca-691e-4a03-a575-7cba3f578856.JPG',
        thumbnail:
          'https://c-static-qa.copart.com/v1/AUTH_svc.qdoc00001/PIX29/baff82e3-784d-456f-81ee-67b36719aab6.JPG',
        fileType: 'IMG',
        createdOn: '06/05/2018 08:00:34',
        modifiedOn: '06/05/2018 08:00:34',
        documentType: 'IMAGE',
        sequenceNumber: 1,
        lotNumber: 53768378,
        linkIds: [801524430, 801524431, 801524429],
        originalLinkId: 801524429,
        isAcknowledged: false,
        id: 0,
        selected: false
      },
      {
        original: 'https://c-static-qa.copart.com/v1/AUTH_svc.qdoc00001/PIX29/85b7ae0f-cc5f-4416-8b7d-c380c90d3cf8.JPG',
        thumbnail:
          'https://c-static-qa.copart.com/v1/AUTH_svc.qdoc00001/PIX29/0bc3a046-ffa9-42b8-84cf-1331ada63f05.JPG',
        fileType: 'IMG',
        createdOn: '06/05/2018 08:00:29',
        modifiedOn: '06/05/2018 08:00:29',
        documentType: 'IMAGE',
        sequenceNumber: 2,
        lotNumber: 53768378,
        linkIds: [801524411, 801524410],
        originalLinkId: 801524410,
        isAcknowledged: false,
        id: 1,
        selected: false
      },
      {
        original: 'https://c-static-qa.copart.com/v1/AUTH_svc.qdoc00001/PIX29/16d4fbb3-14f7-4786-9f4f-89e0b83e440b.JPG',
        thumbnail:
          'https://c-static-qa.copart.com/v1/AUTH_svc.qdoc00001/PIX29/aab75bda-d2e3-4c2a-ac4c-b92376eb8fac.JPG',
        fileType: 'IMG',
        createdOn: '06/05/2018 08:00:31',
        modifiedOn: '06/05/2018 08:00:31',
        documentType: 'IMAGE',
        sequenceNumber: 3,
        lotNumber: 53768378,
        linkIds: [801524415, 801524413],
        originalLinkId: 801524413,
        isAcknowledged: false,
        id: 2,
        selected: false
      },
      {
        original: 'https://c-static-qa.copart.com/v1/AUTH_svc.qdoc00001/PIX29/ead92732-3d29-47ce-90db-99322346574c.JPG',
        thumbnail:
          'https://c-static-qa.copart.com/v1/AUTH_svc.qdoc00001/PIX29/529d410e-4f3c-442f-81a6-b8b845b0269e.JPG',
        fileType: 'IMG',
        createdOn: '06/05/2018 08:00:32',
        modifiedOn: '06/05/2018 08:00:32',
        documentType: 'IMAGE',
        sequenceNumber: 4,
        lotNumber: 53768378,
        linkIds: [801524424, 801524425, 801524423],
        originalLinkId: 801524423,
        isAcknowledged: false,
        id: 3,
        selected: false
      },
      {
        original: 'https://c-static-qa.copart.com/v1/AUTH_svc.qdoc00001/PIX29/2a5d7033-98da-47c6-ab64-376c2eca69d0.JPG',
        thumbnail:
          'https://c-static-qa.copart.com/v1/AUTH_svc.qdoc00001/PIX29/7220464a-c068-4144-832a-9707e9d9d8ed.JPG',
        fileType: 'IMG',
        createdOn: '06/05/2018 08:00:34',
        modifiedOn: '06/05/2018 08:00:34',
        documentType: 'IMAGE',
        sequenceNumber: 5,
        lotNumber: 53768378,
        linkIds: [801524428, 801524427],
        originalLinkId: 801524427,
        isAcknowledged: false,
        id: 4,
        selected: false
      },
      {
        original: 'https://c-static-qa.copart.com/v1/AUTH_svc.qdoc00001/PIX29/6feeb5ee-4020-4666-ba08-3059464e0c8a.JPG',
        thumbnail:
          'https://c-static-qa.copart.com/v1/AUTH_svc.qdoc00001/PIX29/c5ed7165-7fcf-465d-b3b9-751889593062.JPG',
        fileType: 'IMG',
        createdOn: '06/05/2018 08:00:32',
        modifiedOn: '06/05/2018 08:00:32',
        documentType: 'IMAGE',
        sequenceNumber: 6,
        lotNumber: 53768378,
        linkIds: [801524420, 801524421, 801524419],
        originalLinkId: 801524419,
        isAcknowledged: false,
        id: 5,
        selected: false
      },
      {
        original: 'https://c-static-qa.copart.com/v1/AUTH_svc.qdoc00001/PIX29/f4420382-1d1c-460b-a354-f2a17bd5a899.JPG',
        thumbnail:
          'https://c-static-qa.copart.com/v1/AUTH_svc.qdoc00001/PIX29/24f245ab-6583-4243-b965-ec78ee47160e.JPG',
        fileType: 'IMG',
        createdOn: '06/05/2018 08:00:31',
        modifiedOn: '06/05/2018 08:00:31',
        documentType: 'IMAGE',
        sequenceNumber: 7,
        lotNumber: 53768378,
        linkIds: [801524417, 801524414],
        originalLinkId: 801524414,
        isAcknowledged: false,
        id: 6,
        selected: false
      },
      {
        original: 'https://c-static-qa.copart.com/v1/AUTH_svc.qdoc00001/PIX29/593b7ebc-d455-484a-8aa9-166f334f99ac.JPG',
        thumbnail:
          'https://c-static-qa.copart.com/v1/AUTH_svc.qdoc00001/PIX29/faae8277-05af-4a75-878f-473df3128a21.JPG',
        fileType: 'IMG',
        createdOn: '06/05/2018 08:00:31',
        modifiedOn: '06/05/2018 08:00:31',
        documentType: 'IMAGE',
        sequenceNumber: 8,
        lotNumber: 53768378,
        linkIds: [801524418, 801524416],
        originalLinkId: 801524416,
        isAcknowledged: false,
        id: 7,
        selected: false
      },
      {
        original: 'https://c-static-qa.copart.com/v1/AUTH_svc.qdoc00001/PIX29/6d7d1a9e-56a8-41b1-bd7e-14a5688f123f.JPG',
        thumbnail:
          'https://c-static-qa.copart.com/v1/AUTH_svc.qdoc00001/PIX29/2f859a78-b7d7-4665-88e2-f02338dc61aa.JPG',
        fileType: 'IMG',
        createdOn: '06/05/2018 08:00:29',
        modifiedOn: '06/05/2018 08:00:29',
        documentType: 'IMAGE',
        sequenceNumber: 9,
        lotNumber: 53768378,
        linkIds: [801524412, 801524409],
        originalLinkId: 801524409,
        isAcknowledged: false,
        id: 8,
        selected: false
      },
      {
        original: 'https://c-static-qa.copart.com/v1/AUTH_svc.qdoc00001/PIX29/b155bbb3-fd98-44ee-a4b5-decc2a4a58e5.JPG',
        thumbnail:
          'https://c-static-qa.copart.com/v1/AUTH_svc.qdoc00001/PIX29/ef8d6d69-5671-49cf-a06b-6605799077bf.JPG',
        fileType: 'IMG',
        createdOn: '06/05/2018 08:00:32',
        modifiedOn: '06/05/2018 08:00:32',
        documentType: 'IMAGE',
        sequenceNumber: 10,
        lotNumber: 53768378,
        linkIds: [801524426, 801524422],
        originalLinkId: 801524422,
        isAcknowledged: false,
        id: 9,
        selected: false
      }
    ],
    currentFileID: 0
  }
}

export const MOCK_RESULT_DATA = [
  {
    name: 'inspectedAt',
    path: ['fields', 'inspectedAt'],
    value: 'Madrid',
    editable: true,
    readable: true,
    required: false,
    otherProps: {}
  },
  {
    name: 'branch',
    path: ['fields', 'branch'],
    value: 'madrid',
    editable: true,
    readable: true,
    required: false,
    otherProps: {
      placeholder: 'Branch Name'
    }
  },
  {
    name: 'sellerCode',
    path: ['fields', 'sellerCode'],
    value: 'State Farm',
    editable: false,
    readable: true,
    required: false,
    otherProps: {}
  },
  {
    name: 'claimType',
    path: ['fields', 'claimType'],
    value: 'MADRID',
    editable: false,
    readable: true,
    required: false,
    otherProps: {}
  },
  {
    name: 'claim',
    path: ['fields', 'claim'],
    value: '',
    editable: true,
    readable: true,
    required: false,
    otherProps: {}
  }
]
