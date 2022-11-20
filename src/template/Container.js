import './Container.css'
import styled from 'styled-components';
// export default function Container(props) {
//     const classNAme = "container " + props.className;
//     return (
//         <div className={classNAme} >
//             {props.children}
//         </div>
//     )
// }
const Container = styled.div`{border: 2px solid black;
    margin: 5px;}
    &:hover{background-color: blue}`;
export default Container;
