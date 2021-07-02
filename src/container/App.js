import './App.css';
import CandidateCards from '../components/CandidateCards/CandidateCards';
import CandidateNumber from '../components/CandidateNumber/CandidateNumber';
import NewHire from '../components/NewHire/NewHire';
import Rectangle385 from '../components/Rectangle385/Rectangle385';
import SideNavigation from '../components/SideNavigation/SideNavigation';
import TopNavigation from '../components/TopNavigation/TopNavigation';

function App() {
  return (
    <div>
      <SideNavigation/>
      <TopNavigation/>
      <NewHire/>
      <CandidateNumber/>
      <Rectangle385/>
      <CandidateCards/>
    </div>
  );
}

export default App;
