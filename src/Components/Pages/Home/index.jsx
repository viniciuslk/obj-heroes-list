import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { axiosInstance } from "config/Axios";

import { useAppContext } from "Context";
import ObjHeroesList from "Components/Molecules/HeroesList";
import ObjPaginate from "Components/Molecules/Paginate";
import ObjDebounceInput from "Components/Atoms/DebounceInput";
import ObjBox from "Components/Atoms/Box";

const ObjPageHome = () => {
  const { setHero } = useAppContext();
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [heroes, setHeroes] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [filters, setFilters] = useState({
    currentPage: 0,
    name: null
  });

  const onPageChange = ({ selected: currentPage }) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    setFilters(old => ({
      ...old,
      currentPage
    }));
  };

  const onFilterNameChange = event => {
    const value = event.target.value;

    setFilters(old => ({
      ...old,
      name: value.length > 0 ? value : null,
      currentPage: 0
    }));
  };

  useEffect(() => {
    const fetchHeroes = async () => {
      setLoading(true);

      const response = await axiosInstance.get(
        `/characters?page[limit]=10&page[offset]=${filters.currentPage *
          10}${filters.name && `&filter[name]=${filters.name}`}`
      );
      setHeroes(response.data.data);
      setTotalCount(response.data.meta.count / 10);

      setLoading(false);
    };

    fetchHeroes();
  }, [filters]);

  const onItemClick = hero => {
    setHero(hero);
    history.push(`/detalhes/${hero.id}`);
  };

  return (
    <ObjBox>
      <ObjDebounceInput
        mb={{ _: 3, lg: 7 }}
        px={8}
        label="Nome do Personagem"
        onChange={onFilterNameChange}
      />
      <ObjHeroesList
        source={heroes}
        loading={loading}
        onItemClick={onItemClick}
      />
      {heroes && heroes.length ? (
        <ObjPaginate
          onPageChange={onPageChange}
          pageCount={totalCount}
          isFirstPage={filters.currentPage === 0}
          isLastPage={filters.currentPage + 1 >= totalCount}
        />
      ) : null}
    </ObjBox>
  );
};

export default ObjPageHome;
