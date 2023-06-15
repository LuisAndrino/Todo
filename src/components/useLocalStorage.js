import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
   
    setTimeout(() => {
      try{
      const localStorageItems = localStorage.getItem(itemName);
      let TodosV1;
      if(!localStorageItems){
      
        localStorage.setItem(itemName, JSON.stringify(initialValue))
        TodosV1 = initialValue;
        
      } else {
        TodosV1 = JSON.parse(localStorageItems)
        setItem(TodosV1)
      }
    setLoading(false)
  } catch (error) {
    setLoading(false)
    setError(true)
  }
      
    }, 2000);
   
    
}, [])
  
  const saveItem = (newItem) => 
  {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return {item ,saveItem, loading, error}
}

export {useLocalStorage}