import React from "react";
import { S } from "./ListStyled"


interface PropsType {
  children?: React.ReactNode;
}

export default function List(props: PropsType) {
  return (
    <ul>
          {React.Children.map(props.children, (child) => {
            return <li>{child}</li>;
          })}
        </ul>
      );
    }
    
    // interface ListProps {
    //     // listObj?: object;
    //     user?: string;
    //     listImage?: string;
    //     alt?: string;
    //     listTitle?: string;
    //     listText?: string,
    //     value?: number;
    //     rating?: number;
    //     date?: String;
    //     children?: React.ReactNode;
    //   }
// export function List(list: ListProps) {
//     return (
//         <ul>
//           <S.List>  
//           <S.ListImage src={list.listImage} alt={list.alt} />
          
//           <div>{list.user}</div>  
//           <h3>{list.date}</h3>
//           <hr/>
          
//           <S.ListTitle>
//           <h1>{list.listTitle}</h1>
//           </S.ListTitle>
          
//           <S.ListBody>  
//           <p>         
//           {list.listText}
//           </p>
//           </S.ListBody>
//           <hr/>
          
//           <S.ListLink>
//           <h3>value</h3><h2>{list.value}</h2>
//           <h3>rating</h3><h2>{list.rating}</h2>
//           </S.ListLink>
//           </S.List>

//         </ul>
//           );
// };

// export default List

// const List = ({ title, text, url, imageUrl }) => (
//     <S.List>
//       <S.ListImage src={imageUrl} alt={title} />
//       <S.ListBody>
//         <S.ListTitle>{title}</S.ListTitle>
//         <S.ListText>{text}</S.ListText>
//         <S.ListLink href={url}>See More</S.ListLink>
//       </S.ListBody>
//     </S.List>
//   );