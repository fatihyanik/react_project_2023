import React from "react";
import Card from "./Card";
import Pokeinfo from "./PokeInfo";
import { useState } from "react";
import { useEffect } from "react";
const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const pokeFun2 = async () => {
    setLoading(true);
    const res = await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        getPokemon2(data.results);
        setLoading(false)
        //console.log(pokeData);
      });
  };

  const getPokemon2=async(res)=>{
    res.map(async(item)=>{
      const result=await fetch(item.url)
                            .then((data)=>data.json())
     //console.log(item.url);
     //console.log(result);
      setPokeData(state=>{
        state=[...state, result.data]
        state.sort((a,b)=>a.id>b.id?1:-1)
        return state;
      })
    })
  }

  useEffect(() => {
    pokeFun2();
  }, [url]);
  return (
    <>
      <div className='container'>
        <div className='left-content'>
          <Card
            pokemon={pokeData}
            loading={loading}
            infoPokemon={(poke) => setPokeDex(poke)}
          />

          <div className='btn-group'>
            {prevUrl && (
              <button
                onClick={() => {
                  setPokeData([]);
                  setUrl(prevUrl);
                }}
              >
                Previous
              </button>
            )}

            {nextUrl && (
              <button
                onClick={() => {
                  setPokeData([]);
                  setUrl(nextUrl);
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
        <div className='right-content'>
          <Pokeinfo data={pokeDex} />
        </div>
      </div>
    </>
  );
};
export default Main;
