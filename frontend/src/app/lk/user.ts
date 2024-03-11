type user = {
  name: string,
  email: string,
  phone: string,
  raspisanies?: {
    data: raspisanie[]
  }
}

type raspisanie = {
  attributes: {
    date: string,
    time: string,
    usluga: {
      data: {
        attributes: {
          name: string,
          price: number,
        }
      }
    }
  }
}

export default user