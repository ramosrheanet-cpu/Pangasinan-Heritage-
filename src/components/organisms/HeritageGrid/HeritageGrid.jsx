import HeritageCard from '../../molecules/HeritageCard/HeritageCard';

import './HeritageGrid.css';

function HeritageGrid({ items }) {

  return (
    <div className="heritage-grid">

      {items.map((item) => (
        <HeritageCard
          key={item.id}
          item={item}
        />
      ))}

    </div>
  );
}

export default HeritageGrid;