import {randomCustomer, allCustomers, customerByUUID} from '@/utils/customer-in-memory-db';

// TODO - externalize
const NUM_CUSTOMERS = 1000;

describe('db tests', () => {
  let db: any[];
  beforeEach(async () => {
   db = await allCustomers();
  });

  it('should have 1000 customers', async () => {
    // I gotta test it, right?
    const localDB = await allCustomers();
    expect(localDB.length).toBe(1000);
  });

  it('should get a random customer', async () => {
    const testCustomerIdx = Math.floor(Math.random() * NUM_CUSTOMERS);
    // grab customer by id locally in copy
    expect(db).not.toBeUndefined();
    const testCustomer = db[testCustomerIdx];
    const testCustomerId = testCustomer.id;

    // now call API
    const c = await customerByUUID(testCustomerId);
    expect(c.id).toBe(testCustomerId);
    expect(c).toMatchObject(testCustomer);
  })
});

