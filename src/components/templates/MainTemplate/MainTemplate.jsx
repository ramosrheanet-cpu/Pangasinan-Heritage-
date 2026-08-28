import HeaderNavigation
  from '../../organisms/HeaderNavigation/HeaderNavigation';

import Footer
  from '../../organisms/Footer/Footer';

import './MainTemplate.css';

function MainTemplate({ children }) {

  return (
    <div className="app-shell">

      <HeaderNavigation />

      <main>
        {children}
      </main>

      <Footer />

    </div>
  );
}

export default MainTemplate;