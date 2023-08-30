import MealOptions from './components/MealOptions'
import SearchSection from './components/SearchSection'
import styles from './styles/page.module.css'

export default function Home() {
  return (
    <div>
      <SearchSection/>
      <MealOptions/>
    </div>
  )
}
