export default class NotefulApi {
  constructor(){
    this.baseUrl = 'http://localhost:9090'
  }

  async addFolder(folder){
    const res = await fetch(`${this.baseUrl}/folders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(folder)
    })
    
    if (!res.ok) {
      throw new Error('An error occurred while contacting the Noteful service')
    } else {
      return res.json()
    }
  }
}

