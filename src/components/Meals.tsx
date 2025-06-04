import axios from "axios";
import { useEffect, useState } from "react";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => setMeals(res.data.meals))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='p-4'>
      <h1 className='text-3xl font-bold mb-4'>List Sea Food</h1>
      <div className='grid grid-cols-2 md:grid-cols-3  gap-8 '>
        {meals.map(({ strMeal, strMealThumb, idMeal }) => (
          <div className='p-2 hover:cursor-pointer' key={idMeal}>
            <img src={strMealThumb} alt={strMeal} className='object-fit-cover rounded-xl hover:scale-105 transition duration-1000' />
            <div className='flex flex-col md:flex-row items-start md:items-center space-y-3 md:space-y-0 justify-between mt-2'>
              <div className='font-semibold'>{strMeal}</div>
              <div className='text-gray-400'># {idMeal}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
