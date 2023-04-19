import {faker} from '@faker-js/faker';

const NUM_CUSTOMERS = 1000;

function createRandomCustomer() {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  return {
    id: faker.datatype.uuid(),
    firstName,
    lastName,
    username: faker.internet.userName(firstName, lastName),
    email: faker.internet.email(firstName, lastName, "gmail.com")
  };
}

// this'll show them! one-time burn up
const customers = new Array<any>();

for (let i = 0; i < NUM_CUSTOMERS; i++) {
  customers.push(createRandomCustomer());
}

export function allCustomers() {
  return Promise.resolve([ ... customers ]);
}


export function randomCustomer() {
  const customerIdx = Math.floor(Math.random() * NUM_CUSTOMERS);
  return customers[customerIdx];
}

export function customerByUUID(uuid: string) {
  console.log(`finding ${uuid}`);
  const result = customers.find(c => c.id === uuid);
  console.dir(result);
  return Promise.resolve(result);
}
