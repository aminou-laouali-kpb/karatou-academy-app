import { useContext } from 'react';
import { LearningContext } from '../context/learningCore';

export function useLearning() {
  const context = useContext(LearningContext);

  if (!context) {
    throw new Error('useLearning must be used within LearningProvider');
  }

  return context;
}
