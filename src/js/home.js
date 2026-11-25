import { api } from './api.js'

const yo = await api.get('/api/auth/yo')
document.querySelector('#saludo-nombre').textContent = yo.name.split(' ')[0]