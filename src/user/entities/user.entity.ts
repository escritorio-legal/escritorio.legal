export default class User {
  name: string;
  email: string;
  password: string;
  phone: string;

  constructor(name: string, email: string, phone: string, password: string) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.password = password;
  }
}
