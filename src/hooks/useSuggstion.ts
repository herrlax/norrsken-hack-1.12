import { useCallback, useState } from 'react';
import { API_URL } from '../context/DataContext';

export function useSuggestion() {
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = useCallback(() => {
    async function getSuggestionsFromApi() {
      const response = await fetch(`${API_URL}/getDinners`).then(res =>
        res.json()
      );
      setSuggestions(response);
      return response;
    }
    return getSuggestionsFromApi().then();
  }, []);

  return { suggestions, getSuggestions };
}
