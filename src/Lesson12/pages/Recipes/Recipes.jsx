import { useEffect, useState } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import TableHead from "../../components/TableHead/TableHead";

export const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [sortVar, setSortVar] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((res) => setRecipes(res.recipes));
  }, []);

  const sortArrByTitle = () => {
    const sortedByTitle = recipes.toSorted((a, b) => {
      if (sortVar === false) {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setSortVar(!sortVar);
    setRecipes(sortedByTitle);
  };

  const sortArrByNum = () => {
    const sortedByNum = recipes.toSorted((a, b) => {
      return sortVar === false ? a.rating - b.rating : b.rating - a.rating;
    });
    setSortVar(!sortVar);
    setRecipes(sortedByNum);
  };

  return (
    <div className="data">
      <div className="header">
        <TableHead
          title="Name"
          num="Rating"
          info="Description"
          sortByTitle={sortArrByTitle}
          sortByNum={sortArrByNum}
        />
      </div>
      <div className="dashboard">
        {recipes.map((item) => {
          return (
            <Dashboard
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              number={item.rating}
              someDetail={item.cuisine}
            />
          );
        })}
      </div>
    </div>
  );
};
