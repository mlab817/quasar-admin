const state = () => {
  return {
    teams: [
      {
        avatar: 'http://assets.stickpng.com/images/5ede4a3fb760540004f2c5e9.png',
        name: 'Demon Slayer Corps',
        roles: ['owner'],
        members: [
          'shinobukochou@kny.com',
          'tanjirokamado@kny.com',
          'giyuutomioka@kny.com',
          'netsukokamado@kny.com',
          'kyojurorengoku@kny.com'
        ]
      },
      {
        avatar: 'https://cdn.staticneo.com/w/bleach/thumb/Gotei_13_symbol.png/200px-Gotei_13_symbol.png',
        name: 'Gotei 13',
        roles: ['contributor'],
        members: []
      },
      {
        avatar: 'https://i.pinimg.com/originals/20/ef/ae/20efae759ff55147e8799bf1321e57c4.jpg',
        name: 'Deadly Sins',
        roles: ['contributor'],
        members: []
      },
      {
        avatar: 'https://www.clipartmax.com/png/middle/434-4344455_night-raid-logo.png',
        name: 'Night Raid',
        roles: ['contributor'],
        members: []
      },
    ]
  }
}

const actions = {}

const mutations = {}

const getters = {}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
