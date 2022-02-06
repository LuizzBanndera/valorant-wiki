import styled from "styled-components"


export default function Loading(props:any) {

  return(
    <Animation>
      <div {...props} className="lds-facebook"><div></div><div></div><div></div></div>
    </Animation>
      
  )
}

const Animation = styled.div`
  z-index: 2;
  position: absolute;
  top: 50%;
  left: calc(50% - 50px);
.lds-facebook {
  display: inline-block;
  position: relative;
  width: 50px;
  height: 50px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 5px;
  width: 13px;
  background: var(--g-gray);
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
}
`