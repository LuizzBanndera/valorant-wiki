import { AxiosResponse } from "axios"
import { GetStaticProps } from "next"
import Image from "next/image"
import styled from "styled-components"
import db from '@services/api'
import { TMap, TMaps } from "../shared/types/types.maps"
import React, { useState } from "react"
import { SyntheticEvent } from "react"

export default function Maps({data}: TMaps) {

  const [map, setMap] = useState<TMap>({
    uuid: '',
    displayIcon: data[0].displayIcon,
    displayName: '',    
    cordinates: '',
    listViewIcon: '',
    splash: '',
    xMultiplier: 0,
    yMultiplier: 0,
    xScalarToAdd: 0,
    yScalarToAdd: 0,
    callouts: [],  
  })
    
  const handleArr = () => {    
    data.forEach((value, idx, arr)=> {
      if (value.uuid === 'ee613ee9-28b7-4beb-9666-08db13bb2244') {//remove (the range) from maps
        arr.splice(idx, 1)
      }
    })
  }

  handleArr()  
    console.log('redraw');
    
  return(
    <Container> 
      <MapList>
      {
        data.map((value, idx) => (
          <Button onClick={() => setMap(value)} key={idx} uuid={value.uuid} uuidSelected={map.uuid} className="g-title">{value.displayName}</Button>          
        ))
      }
      </MapList>
      <Map>
        <div className="image-container">
          <Image quality={100} className="image" src={map.displayIcon} alt="map" objectFit="contain" layout="fill"/>
        </div>
      </Map>
    </Container>
  )
}


const Container = styled.div`
  height: 100%;
  display: flex;
  padding: 2rem;
  @media(max-width: 600px) {
    flex-direction: column;
  }
`
const MapList = styled.div`
  height: calc(94vh - 57px);
  overflow: auto;
  display: flex;
  min-width: max-content;
  border-bottom-style: groove;
  border-width: 1px;
  flex-direction: column;
  gap: 5px;

`
const Button = styled.p<{uuid: string, uuidSelected: string}>`
  font-size: 96px !important;
  
  cursor: pointer;
  transition: 0.3s;
  :hover {
    color: var(--g-red);
  }
  color: ${props => props.uuid === props.uuidSelected ? 'var(--g-red) !important' : 'var(--g-white)'};
  
`

const Map = styled.div`
  display: flex;
  padding: 1rem;
  width: -webkit-fill-available;

  .image-container {
    position: relative;    
    width: inherit;
  }
`

//next functions
export const getStaticProps : GetStaticProps = async () => {
  try {
    const res : AxiosResponse<TMaps> = await db.get('/maps', {
      params: {        
        isPlayableCharacter: true
      }
    })
    
    const data = res.data.data
    return {
      props: {
        data
      },
      revalidate: 180
    }

  } catch (error) {
    return {
      props: {
        error
      },
      revalidate: 10
    }
  }

}