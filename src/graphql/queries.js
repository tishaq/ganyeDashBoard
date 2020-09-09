/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTicket = /* GraphQL */ `
  query GetTicket($id: ID!) {
    getTicket(id: $id) {
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
export const listTickets = /* GraphQL */ `
  query ListTickets(
    $filter: ModelTicketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
        collector {
          id
          name
          email
          password
          collectorId
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getCollector = /* GraphQL */ `
  query GetCollector($id: ID!) {
    getCollector(id: $id) {
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
export const listCollectors = /* GraphQL */ `
  query ListCollectors(
    $filter: ModelCollectorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollectors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        password
        collectorId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getManager = /* GraphQL */ `
  query GetManager($id: ID!) {
    getManager(id: $id) {
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
export const listManagers = /* GraphQL */ `
  query ListManagers(
    $filter: ModelManagerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listManagers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        password
        phone
        logo
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDevice = /* GraphQL */ `
  query GetDevice($id: ID!) {
    getDevice(id: $id) {
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
export const listDevices = /* GraphQL */ `
  query ListDevices(
    $filter: ModelDeviceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDevices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        deviceName
        deviceId
        address
        lga
        state
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
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
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        code
        type
        item
        fee
        withQuantity
        withName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
