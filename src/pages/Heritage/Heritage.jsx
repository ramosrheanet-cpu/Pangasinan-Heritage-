import { useMemo, useState } from 'react';

import MainTemplate
  from '../../components/templates/MainTemplate/MainTemplate';

import Typography
  from '../../components/atoms/Typography/Typography';

import SearchForm
  from '../../components/molecules/SearchForm/SearchForm';

import HeritageGrid
  from '../../components/organisms/HeritageGrid/HeritageGrid';

import heritageData
  from '../../data/heritageData';

import './Heritage.css';

function Heritage() {

  const [query, setQuery] = useState('');

  const filteredItems = useMemo(() => {

    if (!query.trim()) {
      return heritageData;
    }

    return heritageData.filter((item) =>
      `${item.title}
       ${item.category}
       ${item.description}
       ${item.location}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );

  }, [query]);

  return (
    <MainTemplate>

      <section className="page-section">

        <div className="heritage-intro">

          <span className="eyebrow">
            EXPLORE
          </span>

          <Typography variant="title">
            Pangasinan Heritage
          </Typography>

          <p>
            Discover selected places,
            food traditions, landmarks
            and cultural stories.
          </p>

          <SearchForm
            onSearch={setQuery}
          />

        </div>

        <HeritageGrid
          items={filteredItems}
        />

      </section>

    </MainTemplate>
  );
}

export default Heritage;