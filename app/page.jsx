import MealOptions from './components/MealOptions'
import SearchSection from './components/SearchSection'
import AboutRestaurant from './components/AboutRestaurant';
import Diet from './components/Diet';


export default function Home() {
  return (
    <div>
      <SearchSection/>
      <MealOptions/>
      <AboutRestaurant/>
      <Diet/>
    </div>
  )
}
