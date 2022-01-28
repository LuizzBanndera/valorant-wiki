import { AxiosResponse } from "axios"
import { GetStaticProps } from "next"
import Image from "next/image"
import styled from "styled-components"
import db from '@services/api'
import { TMap, TMaps } from "../shared/types/types.maps"
import React, { useState } from "react"

export default function Maps({data}: TMaps) {

  const [map, setMap] = useState<TMap>({
    uuid: data[0].uuid,
    displayIcon: data[0].displayIcon,
    displayName: data[0].displayName,    
    cordinates: data[0].cordinates,
    listViewIcon: data[0].listViewIcon,
    splash: data[0].splash,
    xMultiplier: data[0].xMultiplier,
    yMultiplier: data[0].yMultiplier,
    xScalarToAdd: data[0].xScalarToAdd,
    yScalarToAdd: data[0].yScalarToAdd,
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
    
  return(
    <Container image={map.splash}> 
      <MapList>
      {
        data.map((value, idx) => (
          <Button onClick={() => setMap(value)} key={idx} uuid={value.uuid} uuidSelected={map.uuid} className="g-title">{value.displayName}</Button>          
        ))
      }
      </MapList>
      <Map>
        <div className="image-container">
          <div className="image-bg"></div>
          <Image quality={100} className="image" src={map.displayIcon} alt="map" objectFit="contain" layout="fill"/>
        </div>
        <div className="list-view-container">
          <Image quality={100} className="image" src={map.listViewIcon} alt="map" objectFit="cover" layout="fill"/>
        </div>
      </Map>
    </Container>
  )
}

const Container = styled.div<{image: string}>`
  height: 100%;
  display: flex;
  padding: 1rem;
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
  color: ${props => props.uuid === props.uuidSelected ? 'var(--g-red) !important' : ''};
  :hover {
    color: var(--g-red);
  }  

  @media(max-width: 600px) {
    font-size: 64px !important;
  }
`

const Map = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media(max-width: 600px) {
    padding: unset;
  }

  .image-container {
    position: relative;    
    width: inherit;
    transition: 0.3s ease-in-out;
    width: 30rem;
    height: 30rem;    
  }
  .list-view-container {
    position: relative;    
    width: inherit;
    transition: 0.3s ease-in-out;
    width: 30rem;
    height: 7rem;    
    cursor: pointer;
    border-color: var(--g-white);
    border-width: 1px;
    border-style: groove;
    :hover {
      border-color: var(--g-red);
    }
  }
`

//next functions
export const getStaticProps : GetStaticProps = async () => {
  try {
    const res : AxiosResponse<TMaps> = await db.get('/maps')
    
    const data = res.data.data
    return {
      props: {
        data
      }
    }

  } catch (error) {
    return {
      props: {
        error
      }
    }
  }

}