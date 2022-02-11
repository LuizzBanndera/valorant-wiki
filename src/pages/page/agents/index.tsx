import styled from 'styled-components'
import CardAgents from '@db/lib/components/cardAgent'
import db from '@services/api'
import { AxiosResponse } from 'axios'
import { GetStaticProps } from 'next'
import {TAgents} from '@db/lib/shared/types/types.agents'

export default function AgentsMenu ({data}: TAgents) {

  return (
    <ContainerStyled>        
      {            
        data.map((agent, idx) => (            
          <div key={idx}>     
            <CardAgents {...agent} />
          </div>
        ))        
      }        
    </ContainerStyled>
  )
}

export const getStaticProps : GetStaticProps = async ({locale}) => {
  try {    
    const res : AxiosResponse<TAgents> = await db.get(`/agents?language=${locale}`, {
      params: {        
        isPlayableCharacter: true,
      }
    })
    
    const data = res.data.data
    return {
      props: {
        data,        
        messages: (require(`../../../messages/${locale}.json`))
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

//styled components

const ContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  padding: 2% 5% 60px;  
  flex: 1;
  justify-content: center;
  margin-bottom: 50px;
  gap: 1rem;
`