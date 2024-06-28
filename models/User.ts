import { faker } from '@faker-js/faker';

export class User {
  firstName: string;
  lastName: string;
  postalCode: string;

  constructor() {
    this.firstName = faker.person.firstName();
    this.lastName = faker.person.lastName();
    this.postalCode = faker.location.zipCode();
  }
}
