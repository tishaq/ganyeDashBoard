/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTicket = /* GraphQL */ `
  mutation CreateTicket(
    $input: CreateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    createTicket(input: $input, condition: $condition) {
      id
      collector {
        id
        name
        email
        password
        collectorId
        createdAt
        updatedAt
      }
      device {
        id
        deviceName
        deviceId
        address
        lga
        state
        createdAt
        updatedAt
      }
      ticketType
      itemName
      quantity
      payerName
      code
      fee
      date
      timeStamp
      createdAt
      updatedAt
    }
  }
`;
export const updateTicket = /* GraphQL */ `
  mutation UpdateTicket(
    $input: UpdateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    updateTicket(input: $input, condition: $condition) {
      id
      collector {
        id
        name
        email
        password
        collectorId
        createdAt
        updatedAt
      }
      device {
        id
        deviceName
        deviceId
        address
        lga
        state
        createdAt
        updatedAt
      }
      ticketType
      itemName
      quantity
      payerName
      code
      fee
      date
      timeStamp
      createdAt
      updatedAt
    }
  }
`;
export const deleteTicket = /* GraphQL */ `
  mutation DeleteTicket(
    $input: DeleteTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    deleteTicket(input: $input, condition: $condition) {
      id
      collector {
        id
        name
        email
        password
        collectorId
        createdAt
        updatedAt
      }
      device {
        id
        deviceName
        deviceId
        address
        lga
        state
        createdAt
        updatedAt
      }
      ticketType
      itemName
      quantity
      payerName
      code
      fee
      date
      timeStamp
      createdAt
      updatedAt
    }
  }
`;
export const createCollector = /* GraphQL */ `
  mutation CreateCollector(
    $input: CreateCollectorInput!
    $condition: ModelCollectorConditionInput
  ) {
    createCollector(input: $input, condition: $condition) {
      id
      name
      Manager {
        id
        name
        email
        password
        phone
        logo
        createdAt
        updatedAt
      }
      tickets {
        nextToken
      }
      email
      password
      collectorId
      createdAt
      updatedAt
    }
  }
`;
export const updateCollector = /* GraphQL */ `
  mutation UpdateCollector(
    $input: UpdateCollectorInput!
    $condition: ModelCollectorConditionInput
  ) {
    updateCollector(input: $input, condition: $condition) {
      id
      name
      Manager {
        id
        name
        email
        password
        phone
        logo
        createdAt
        updatedAt
      }
      tickets {
        nextToken
      }
      email
      password
      collectorId
      createdAt
      updatedAt
    }
  }
`;
export const deleteCollector = /* GraphQL */ `
  mutation DeleteCollector(
    $input: DeleteCollectorInput!
    $condition: ModelCollectorConditionInput
  ) {
    deleteCollector(input: $input, condition: $condition) {
      id
      name
      Manager {
        id
        name
        email
        password
        phone
        logo
        createdAt
        updatedAt
      }
      tickets {
        nextToken
      }
      email
      password
      collectorId
      createdAt
      updatedAt
    }
  }
`;
export const createManager = /* GraphQL */ `
  mutation CreateManager(
    $input: CreateManagerInput!
    $condition: ModelManagerConditionInput
  ) {
    createManager(input: $input, condition: $condition) {
      id
      name
      collectors {
        nextToken
      }
      devices {
        nextToken
      }
      email
      password
      phone
      logo
      createdAt
      updatedAt
    }
  }
`;
export const updateManager = /* GraphQL */ `
  mutation UpdateManager(
    $input: UpdateManagerInput!
    $condition: ModelManagerConditionInput
  ) {
    updateManager(input: $input, condition: $condition) {
      id
      name
      collectors {
        nextToken
      }
      devices {
        nextToken
      }
      email
      password
      phone
      logo
      createdAt
      updatedAt
    }
  }
`;
export const deleteManager = /* GraphQL */ `
  mutation DeleteManager(
    $input: DeleteManagerInput!
    $condition: ModelManagerConditionInput
  ) {
    deleteManager(input: $input, condition: $condition) {
      id
      name
      collectors {
        nextToken
      }
      devices {
        nextToken
      }
      email
      password
      phone
      logo
      createdAt
      updatedAt
    }
  }
`;
export const createDevice = /* GraphQL */ `
  mutation CreateDevice(
    $input: CreateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    createDevice(input: $input, condition: $condition) {
      id
      manager {
        id
        name
        email
        password
        phone
        logo
        createdAt
        updatedAt
      }
      tickets {
        nextToken
      }
      items {
        nextToken
      }
      deviceName
      deviceId
      address
      lga
      state
      createdAt
      updatedAt
    }
  }
`;
export const updateDevice = /* GraphQL */ `
  mutation UpdateDevice(
    $input: UpdateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    updateDevice(input: $input, condition: $condition) {
      id
      manager {
        id
        name
        email
        password
        phone
        logo
        createdAt
        updatedAt
      }
      tickets {
        nextToken
      }
      items {
        nextToken
      }
      deviceName
      deviceId
      address
      lga
      state
      createdAt
      updatedAt
    }
  }
`;
export const deleteDevice = /* GraphQL */ `
  mutation DeleteDevice(
    $input: DeleteDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    deleteDevice(input: $input, condition: $condition) {
      id
      manager {
        id
        name
        email
        password
        phone
        logo
        createdAt
        updatedAt
      }
      tickets {
        nextToken
      }
      items {
        nextToken
      }
      deviceName
      deviceId
      address
      lga
      state
      createdAt
      updatedAt
    }
  }
`;
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
      id
      code
      device {
        id
        deviceName
        deviceId
        address
        lga
        state
        createdAt
        updatedAt
      }
      type
      item
      fee
      withQuantity
      withName
      createdAt
      updatedAt
    }
  }
`;
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
      id
      code
      device {
        id
        deviceName
        deviceId
        address
        lga
        state
        createdAt
        updatedAt
      }
      type
      item
      fee
      withQuantity
      withName
      createdAt
      updatedAt
    }
  }
`;
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
      id
      code
      device {
        id
        deviceName
        deviceId
        address
        lga
        state
        createdAt
        updatedAt
      }
      type
      item
      fee
      withQuantity
      withName
      createdAt
      updatedAt
    }
  }
`;
