export type Role = {
  uuid : string
  displayName : string
  description : string
  displayIcon : string
}

export type Agent = {
  data : {
    uuid : string
    displayName : string
    description : string
    displayIcon : string
    role : Role
  }
}

export type Agents = {  
  data : Agent[]
}