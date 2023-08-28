export const CountryTable = ({data}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <strong>Common Name</strong>
          </th>
          <th>
            <strong>Official Name</strong>
          </th>
          <th>
            <strong>Flag</strong>
          </th>
          <th>
            <strong>Population</strong>
          </th>
          <th>
            <strong>Capital(s)</strong>
          </th>
          <th>
            <strong>Region</strong>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((country) => (
          <tr key={country.cca2}>
            <td>{country.name.common}</td>
            <td>{country.name.official}</td>
            <td>
              <img
                src={country.flags.png}
                alt={country.flags.alt}
                width="100"
              />
            </td>
            <td>{country.population}</td>
            <td>{Array.isArray(country.capital) ? country.capital.join(', ') : country.capital}</td>
            <td>{country.region}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
