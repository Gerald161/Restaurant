import React from 'react';
import MealTypeSelectionTab from './MealComponents/MealTypeSelectionTab';
import MealResults from './MealComponents/MealResults';

export default function MealOptions() {
  return (
    <div>
      <MealTypeSelectionTab/>
      <MealResults/>
    </div>
  )
}
