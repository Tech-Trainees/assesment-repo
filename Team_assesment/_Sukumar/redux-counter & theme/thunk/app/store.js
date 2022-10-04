import {configureStore} from '@reduxjs/toolkit'
import counterSlicereducer from '../features/counter/counterSlice'

export default configureStore({
    reducer: {
        counter: counterSlicereducer,
    }
})