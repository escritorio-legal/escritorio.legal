export default class Profile {
  name: string;
  lawFirmId: number;

  constructor(name: string, lawFirm: number) {
    this.name = name;
    this.lawFirmId = lawFirm;
  }
}
