import { useCallback, useState } from 'react';
import { API_URL } from '../context/DataContext';

export function useSuggestion() {
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = useCallback(() => {
    async function getSuggestionsFromApi() {
      setLoading(true);
      try {
        const response = await fetch(`${API_URL}/getDinners`).then(res =>
          res.json()
        );
        setSuggestions(response);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    return getSuggestionsFromApi();
  }, []);

  return { suggestions, getSuggestions, loading };
}
