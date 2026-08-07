'use client'
import HomeNav from "@/components/shared/HomeNav";
import { useCallback, useState } from "react";

export default function Home() {

  let [count, setCount] = useState(0);

  const [adjective, setAdjective] = useState('faaaa')

  const getAdjective = useCallback(() => {
    return 'another ' + count;
  }, [count])
  // const getAdjective = useCallback(() => {
  //   return 'another ' + count;
  // }, [])

  // const getAdjective = () => {
  //   return 'another';
  // }

  return (

    <div className="flex gap-3 flex-col">
      <HomeNav getAdjective={getAdjective} adjective={'hey'} />
      Home page

      <button onClick={() => setCount(count + 1)} className="btn btn-accent">Count : {count}</button>
    </div>
  );
}
