import React, { useEffect, useState } from "react";

// components
import Hero from "../components/Hero";

// redux
import { fetchAgents } from "../features/agentsSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAgents());
  }, []);

  return (
    <>
      <Hero />
    </>
  );
};

export default Home;
