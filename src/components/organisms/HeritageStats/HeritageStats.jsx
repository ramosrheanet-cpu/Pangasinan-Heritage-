import './HeritageStats.css';

function HeritageStats() {
  return (
    <section className="heritage-stats">

      <div className="heritage-stats__inner">

        <div className="heritage-stats__intro">

          <span>
            THE PROVINCE TODAY
          </span>

          <h2>
            Heritage that continues to grow.
          </h2>

          <p>
            Pangasinan's natural and cultural
            heritage continues to support tourism,
            communities and local livelihoods.
          </p>

        </div>


        <div className="heritage-stats__grid">

          <article className="heritage-stat">

            <strong>
              846K+
            </strong>

            <span>
              visitor arrivals
            </span>

            <small>
              2025
            </small>

          </article>


          <article className="heritage-stat">

            <strong>
              ₱1.109B
            </strong>

            <span>
              tourism receipts
            </span>

            <small>
              2025
            </small>

          </article>


          <article className="heritage-stat">

            <strong>
              17,564
            </strong>

            <span>
              tourism-related jobs
            </span>

            <small>
              2025
            </small>

          </article>

        </div>

      </div>

    </section>
  );
}

export default HeritageStats;