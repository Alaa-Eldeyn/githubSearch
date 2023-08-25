import { Column2d, Doughnut2d, Pie3d, Bars2d } from "../Components/charts";
import { useGlobalContext } from "../Context/Context";

const Repos = () => {
  const { repos } = useGlobalContext();

  const languages = repos.reduce((total, lang) => {
    const { language, stargazers_count, name } = lang;
    if (!language) return total;
    const langName = total[language];
    if (!langName) {
      total[language] = {
        label: language,
        value: 1,
        stars: stargazers_count,
        name,
      };
    } else {
      total[language] = {
        ...langName,
        value: langName.value + 1,
        stars: langName.stars + stargazers_count,
        name,
      };
    }
    return total;
  }, {});
  const popularLangs = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);
  const mostStars = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .map((item) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 5);

  let { stars, forks } = repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item;
      total.stars[stargazers_count] = { label: name, value: stargazers_count };
      total.forks[forks] = { label: name, value: forks };
      return total;
    },
    {
      stars: {},
      forks: {},
    }
  );
  stars = Object.values(stars).slice(-5).reverse();
  forks = Object.values(forks).slice(-5).reverse();

  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mb-5">
      <div>
        <Pie3d data={popularLangs} />
      </div>
      <div className="xl:col-span-2">
        <Column2d data={stars} />
      </div>
      <div>
        <Doughnut2d data={mostStars} />
      </div>
      <div className="xl:col-span-2">
        <Bars2d data={forks} />
      </div>
    </div>
  );
};

export default Repos;
