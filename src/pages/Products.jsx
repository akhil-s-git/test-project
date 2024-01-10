import axios from "axios";
import React, { useEffect, useState } from "react";

import { useQuery } from "react-query";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import { LoadingSpinner } from "../components/LoadingSpinner";
const getProducts = async ({ queryKey }) => {
  const { data } = await axios.get(queryKey[1]);
  return data || [];
};

const getQueriedProducts = async ({ queryKey }) => {
  const { data } = await axios.get(`?product_type=${queryKey[1]}`);
  return data || [];
};
const getCategories = async ({ queryKey }) => {
  const { data } = await axios.get(`?${queryKey[1][0]}=${queryKey[1][1]}`);
  return data || [];
};

function Products({ searchText, filterValue,setCartItem }) {
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [slicePage, setSlicePage] = useState({
    intial: 0,
    final: 9,
  });
  const [selectedCategory, setSelectedCategory] = useState("");
  const [query, setQuery] = useState("");
  const {
    data: categories,
    isLoading: categoryIsLoading,
    isError: categoryIsError,
    error: categoryError,
  } = useQuery(["catagories", query], getCategories, {
    enabled: query !== "",
  });
  const {
    data: queriedData,
    isLoading: queryIsLoading,
    isError: queryError,
  } = useQuery(["productsByQuery", query], getQueriedProducts, {
    enabled: query !== "",
  });

  const { data, isLoading, isError } = useQuery(
    ["productsByCategory", query],
    getProducts,
    {
      enabled: query === "",
    }
  );
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchText) {
        setQuery(searchText);
        setSelectedCategory("");
      } else {
        setQuery("");
      }
    }, 300);
    return () => {
      setQuery("");
      clearTimeout(timeout);
    };
  }, [searchText]);

  useEffect(() => {
    if (filterValue) {
      const value = filterValue?.split("-");
      setQuery(value);
    }
  }, [filterValue]);
  const handlePageChange = (page) => {
    setSlicePage({
      ...slicePage,
      intial: Number(page * 10 - 10),
      final: Number(page * 10 - 1),
    });
    setCurrentPage(page);
    // Fetch data for the new page if needed
  };
  useEffect(() => {
    if (queriedData) {
      setTotal(queriedData.length);
    }
    if (data) {
      setTotal(data.length);
    }
    if (categories) {
      setTotal(categories.length);
    }
  }, [categories, queriedData, data]);
  if (isLoading || categoryIsLoading || queryIsLoading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <div className="max-w-[1240px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
        {!isLoading &&
          !isError &&
          data &&
          data
            .slice(slicePage.intial, slicePage.final)
            .map((item) => <ProductCard setCartItem={setCartItem} key={item.id} item={item} />)}
        {!queryIsLoading &&
          !queryError &&
          queriedData &&
          queriedData
            .slice(slicePage.intial, slicePage.final)
            .map((item) => <ProductCard setCartItem={setCartItem} key={item.id} item={item} />)}
        {!categoryIsLoading &&
          !categoryError &&
          categories &&
          categories
            .slice(slicePage.intial, slicePage.final)
            .map((item) => <ProductCard setCartItem={setCartItem} key={item.id} item={item}  />)}

        {data &&
          queriedData &&
          data.length === 0 &&
          queriedData.length === 0 && <Text>No meals found</Text>}
      </div>
      {total > 9 && (
        <Pagination
          currentPage={currentPage}
          totalPages={Number(total)}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
}

export default Products;
