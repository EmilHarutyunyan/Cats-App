import React from 'react';
import axios from 'axios';
import { useEffect, useState} from 'react/cjs/react.development';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { changeCategory, resetState } from '../../app/dispatch';
import {API__ENDPOINT} from "../../config/serverApiConfig"
import BurgerImg from "../../assets/img/burger.png"
import useHideShow from '../../hooks/useHideShow';
// Styles
import {
  Sidebar,
  SidebarCenter,
  SidebarHeader,
  ListContainer,
  List,
  ListItem,
} from './Navigation.styles';
const Navigation = () => {
  const [categories, setCategories] = useState('');
  const [headerRef,childrenRef, setShowLinks] = useHideShow();

  const dispatch = useDispatch();
  const state = useSelector(function (state) {
    return state;
  });

  useEffect(() => {
    axios
      .get(`${API__ENDPOINT}categories`)
      .then(resp => {
        console.log(resp)
        setCategories(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Sidebar>
      <SidebarCenter>
        <SidebarHeader>
          <h3>
            <Link to='/' onClick={() => 
                {
                    dispatch(resetState(state))
                    setShowLinks(false)
                   
                }
            }> Cat App </Link>
          </h3>
          <img src={BurgerImg} alt="burger" onClick={() => setShowLinks((show)=> !show)}/>
        </SidebarHeader>
        <ListContainer ref={headerRef}>
          <List ref={childrenRef} >
            {categories &&
              categories.map(category => {
                const { id, name } = category;
                return (
                  <ListItem key={id}>
                    <NavLink
                      to={`/category/${id}`}
                      onClick={() =>  
                        {
                            dispatch(changeCategory(id))
                            setShowLinks((show)=> !show)
                        }
                    }
                    >
                      {name}
                    </NavLink>
                  </ListItem>
                );
              })}
          </List>
        </ListContainer>
      </SidebarCenter>
    </Sidebar>
  );
};

export default Navigation;