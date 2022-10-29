export default class ClientEntity {
  constructor(data = {}) {
    this.fullName = data.full_name
    this.address = data.address
    this.cups = data.cups
    this.building_Type = data.building_type
  }
}