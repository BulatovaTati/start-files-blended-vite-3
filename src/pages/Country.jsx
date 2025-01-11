import { useEffect, useRef, useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from '../service/countryApi';
import CountryInfo from '../components/CountryInfo/CountryInfo';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';

const Country = () => {
  const [country, setCountry] = useState({});
  const { countryId } = useParams();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const goBackRef = useRef(location.state ?? '/');
  useEffect(() => {
    (async function fetchCountries() {
      try {
        setIsLoading(true);
        const data = await fetchCountry(countryId);
        setCountry(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [countryId]);
  console.log(location);

  return (
    <Section>
      <Container>
        <Heading title="Country" bottom />
        <GoBackBtn path={goBackRef.current} />
        <CountryInfo
          capital={country.capital}
          countryName={country.countryName}
          flag={country.flag}
          population={country.population}
          languages={country.languages}
        />
      </Container>
    </Section>
  );
};

export default Country;
