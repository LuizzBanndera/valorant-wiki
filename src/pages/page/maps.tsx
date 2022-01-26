import { AxiosResponse } from "axios"
import { GetStaticProps } from "next"
import Image from "next/image"
import styled from "styled-components"
import db from '@services/api'
import { TMaps } from "../shared/types/types.maps"

export default function Maps({data}: TMaps) {

  return(
    <Container>
      <MapList>
        {
          data.map((map, idx) => (
            <div key={idx} className="maps-list">
              <div className="image-container"> 
                <p className="map-name g-title">{map.displayName}</p> 
                <Image quality={100} className="image" src={map.listViewIcon } alt="map" objectFit="contain" layout="fill"/>
              </div>
            </div>
          ))
        }
      </MapList>
      <Map></Map>
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
  border-bottom-style: groove;
  border-width: 1px;
  flex-direction: column;
  gap: 5px;

  .image-container {
    display: flex;
    width: 370px;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 5rem;
    @media(max-width: 600px) {
      width: 100%;
    }
    
    .map-name {
      visibility: hidden; 
      width:100%;
      height: 100%;
      z-index: 2;
      background: #666666b8;      
      opacity: 0;
      transition: opacity .2s, visibility .2s;
      margin-top: 0;
      padding-left: 1rem;
    }      
  }
  .image-container:hover .map-name {    
    visibility: visible;
    opacity: 1;
  }
`
const Map = styled.div`
  display: flex;
  padding: 1rem;
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