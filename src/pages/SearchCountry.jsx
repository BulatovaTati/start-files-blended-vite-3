import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import SearchForm from '../components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { fetchByRegion } from '../service/countryApi';
import CountryList from '../components/CountryList/CountryList';
import Loader from '../components/Loader/Loader';

const SearchCountry = () => {
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = query => {
    setQuery(query);
  };

  useEffect(() => {
    if (!query) return;

    (async function fetchCountries() {
      try {
        setIsLoading(true);
        const data = await fetchByRegion(query);
        setCountries(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [query]);

  return (
    <Section>
      <Container>
        {error && <Heading title={error} bottom />}
        {isLoading && <Loader />}
        <SearchForm onSubmit={onSubmit} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};

export default SearchCountry;
