export type iRole = {
  uuid : string
  displayName : string
  description : string
  displayIcon : string
}

export type iAbilitie = {
  slot : string
  displayName : string
  description : string
  displayIcon : string
}

export type iAgent = {
  
    uuid : string
    displayName : string
    description : string
    displayIcon : string
    fullPortrait : string    
    role : iRole
    abilities : iAbilitie[]
  
}

export type iAgents = {  
  data : iAgent[]
}