export type TRole = {
  uuid : string
  displayName : string
  description : string
  displayIcon : string
}

export type TAbilitie = {
  slot : string
  displayName : string
  description : string
  displayIcon : string
}

export type TAgentData = {
  data :{
    uuid : string
    displayName : string
    description : string
    displayIcon : string
    fullPortrait: string
    fullPortraitV2: string
    role : TRole
    abilities : TAbilitie[] 
  }
}

export type TAgent = {
  uuid : string
  displayName : string
  description : string
  displayIcon : string
  fullPortrait: string    
  fullPortraitV2: string  
  role : TRole
  abilities : TAbilitie[] 
    
}

export type TAgents = {  
  data : TAgent[]
}