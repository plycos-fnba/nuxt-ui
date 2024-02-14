export class Address {
  street: string;
  city: string;
  county: string;
  state: string;

  constructor(address: string, city: string, county: string, state: string) {
    this.street = address;
    this.city = city;
    this.county = county;
    this.state = state;
  }
}
