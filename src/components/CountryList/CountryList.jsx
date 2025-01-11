import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';

const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries.map(({ id, country, flag }) => (
        <GridItem key={id}>
          <Link to={`${routes.country}/${id}`}>
            <img src={flag} alt={country} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};

export default CountryList;
