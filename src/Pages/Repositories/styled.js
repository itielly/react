import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div `
   width: 100%;
   max-width: 991px;
   margin: 0 auto;
`

export const Title = styled.h1 `
   text-align: center;
   font-size: 2rem;
   font-family: sans-serif;
   color: pink;
`

export const List = styled.ul `
   list-style: none;
   padding: 0;
   font-family: sans-serif;
   
`

export const ListItem = styled.li `
   margin: .5rem 0;
   background: pink;
   border-radius: 4px;
   padding: .5rem;
`

export const LinkHome = styled(Link)`
   display: block;
   widht: 4rem;
   text-align: center;
   margin: 2rem auto;
   background-color: pink;
   padding: .5rem 0;
   border-radius: 4px;
   text-decoration: none;
`