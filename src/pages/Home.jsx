import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { getCountries } from '../service/countryApi';
import CountryList from '../components/CountryList/CountryList';
import Loader from '../components/Loader/Loader';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function fetchCountries() {
      try {
        setIsLoading(true);
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <Section>
      <Container>
        {error && <Heading title={error} bottom />}
        {isLoading && <Loader />}

        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
export default Home;
