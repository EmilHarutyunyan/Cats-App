import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeCategory, handleData, handleMore } from '../app/dispatch';
// Config

import { API__ENDPOINT } from '../config/serverApiConfig';

// Components
import DefaultSection from '../components/DefaultSection';
import Spin from '../components/Spin';
import Button from '../components/Button';
import Thumb from '../components/Thumb';
import Grid from '../components/Grid';

const Category = () => {


  const {id:idCat, limit, page, cats} = useSelector((state) => {
      return state.searchCategory
  })
  
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const idCategory = id || idCat;

  useEffect(()=> {
    dispatch(changeCategory(idCategory))
    // eslint-disable-next-line
  }, [idCategory])

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${API__ENDPOINT}images/search?limit=${limit}&page=${page}&category_ids=${idCategory} `
      )
      .then(resp => {
        
        const data = resp.data.map(item => {
          console.log(item);
          const { id, url, categories } = item;
          return { id, url , categories};
        });
        dispatch(handleData(data));
        setLoading(false);

      })
      .catch(resp => {
        console.log(resp);
        setLoading(false);
      });
    // eslint-disable-next-line
  }, [idCategory, limit, page]);

  return (
    <>
      <DefaultSection>
        <Grid>
          {cats.map((item,index) => {
            const { url } = item;
            return <Thumb key={index} image={url} alt={`cat-${id}`} />;
          })}
        </Grid>
        {loading && <Spin />}
        <Button handleMore={() => dispatch(handleMore())} text="Load More"/>
      </DefaultSection>
    </>
  );
};

export default Category;