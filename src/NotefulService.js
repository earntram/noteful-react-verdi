export default class NotefulApi {
  constructor(){
    this.baseUrl = 'http://localhost:9090'
    this.serverErrorMsg = 'An error occurred while contacting the Noteful service'
  }

  async getFolders(){
    try {
      const res = await fetch(`${this.baseUrl}/folders`)
      return res.json();
    } catch(err) {
      throw new Error(this.serverErrorMsg)
    }
  }

  async getNotes(){
    try {
      const res = await fetch(`${this.baseUrl}/notes`)
      return res.json();
    } catch(err) {
      throw new Error(this.serverErrorMsg)
    }
  }

  async addFolder(folder){
    const res = await fetch(`${this.baseUrl}/folders`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(folder)
    })
    
    if (!res.ok) {
      throw new Error(this.serverErrorMsg)
    } else {
      return res.json()
    }
  }

  async addNote(note){
    const res = await fetch(`${this.baseUrl}/notes`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(note)
    })

    if (!res.ok) {
      throw new Error('An error occurred while contacting the Noteful service')
    } else {
      return res.json()
    }
  }
}

