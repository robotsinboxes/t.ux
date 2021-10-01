import styled, {css} from 'styled-components' 

export const ComponentWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 500px;
height: 300px;
border: 2px dashed ${success_grey};
box-sizing: border-box;
border-radius: 5px;
/* background: rgba(51, 51, 51, 0.5); */
${props => props.hover && css`
      background:url(./images/page_button_toolbar.svg);
      background-repeat: no-repeat, no-repeat;
      background-position: right 105px top 55px;
  `}
`

export const ImageContainer = styled.div`
  display: flex;
  width: auto;
  background-color: ${grey_text}; 
  z-index: -10;
  /* left: 100px;
  right: 100px;
  top: 50px; */
  /* bottom: 108px; */
  /* opacity: 0.9; */
`

export const PlaceholderImage = styled.img`
width: 300px;
  ${props => props.hover && css`
      z-index: -10;
      opacity: 0.25;
  `}
  ${props => props.pressed && css`
  /* background: rgba(51, 51, 51, 0.5); */
  z-index: -10;
      opacity: 0.25;
  `}
`

export const AnswerField = styled.input`
position: absolute;
left:  140px;
  width: 280px;
  height: 48px;
  padding-left: 12px;
  border: 1px solid ${tux_black};
  box-sizing: border-box;
  border-radius: 10px;
  margin-top:15px;
  align-items: center;
  justify-content: center;
`;

export const FileMessage = styled.p`
  margin-top: 11px;
  padding: 0;
  color: ${success_grey};
  position: absolute;
  width: 109px;
  height: 13px;
  left: 215px;
  top: 260px;
  font-weight: 500;
  font-size: 10px;
  line-height: 12.5px;
`;