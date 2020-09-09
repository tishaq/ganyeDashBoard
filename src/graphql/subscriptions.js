/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTicket = /* GraphQL */ `
  subscription OnCreateTicket {
    onCreateTicket {
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
export const onUpdateTicket = /* GraphQL */ `
  subscription OnUpdateTicket {
    onUpdateTicket {
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
export const onDeleteTicket = /* GraphQL */ `
  subscription OnDeleteTicket {
    onDeleteTicket {
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
export const onCreateCollector = /* GraphQL */ `
  subscription OnCreateCollector {
    onCreateCollector {
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
export const onUpdateCollector = /* GraphQL */ `
  subscription OnUpdateCollector {
    onUpdateCollector {
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
export const onDeleteCollector = /* GraphQL */ `
  subscription OnDeleteCollector {
    onDeleteCollector {
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
export const onCreateManager = /* GraphQL */ `
  subscription OnCreateManager {
    onCreateManager {
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
export const onUpdateManager = /* GraphQL */ `
  subscription OnUpdateManager {
    onUpdateManager {
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
export const onDeleteManager = /* GraphQL */ `
  subscription OnDeleteManager {
    onDeleteManager {
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
export const onCreateDevice = /* GraphQL */ `
  subscription OnCreateDevice {
    onCreateDevice {
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
export const onUpdateDevice = /* GraphQL */ `
  subscription OnUpdateDevice {
    onUpdateDevice {
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
export const onDeleteDevice = /* GraphQL */ `
  subscription OnDeleteDevice {
    onDeleteDevice {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
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
