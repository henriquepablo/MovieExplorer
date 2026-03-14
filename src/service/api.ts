import axios from 'axios'

const api = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjkwMjhiNjBiMzBkY2U2YjJkYTI0ODFmZjU2NmFlZiIsIm5iZiI6MTcyMDY4MTg5MS42MjUsInN1YiI6IjY2OGY4NWEzNmUzZDNkNDIzMmE3MDdiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5VFqDsmmSqx2yw9wdH5-ARqKdA3jA89OMmh0EWUIF1c',
    }
})

export default api