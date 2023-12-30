// services/firebaseService.js
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

const fetchGyms = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'gyms'))
    const gyms = []
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      gyms.push({
        ...data,
        latitude: parseFloat(data.latitude),
        longitude: parseFloat(data.longitude)
      })
    })
    return gyms
  } catch (error) {
    console.error('Error fetching gyms: ', error)
    return []
  }
}
const fetchExercises = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'exercises'))
    const exercises = []
    querySnapshot.forEach((doc) => {
      exercises.push(doc.data())
    })
    return exercises
  } catch (error) {
    console.error('Error fetching exercises: ', error)
    return []
  }
}

export { fetchGyms, fetchExercises }
