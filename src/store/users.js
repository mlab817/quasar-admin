const state = () => {
  return {
    users: [
        {
          name: 'Shinobu Kochou',
          email: 'shinobukochou@kny.com',
          Created_Date: '15/3/2020',
          Project: 'Quasar Admin',
          avatar: 'https://avatarfiles.alphacoders.com/235/235079.jpg',
          CountProject: 80,
          des: 'Solutions Developer'
        },
        {
          name: 'Tanjiro Kamado',
          email: 'tanjirokamado@kny.com',
          Created_Date: '10/2/2018',
          Project: 'Quasar QDraggableTree',
          avatar: 'https://avatarfiles.alphacoders.com/199/199623.png',
          CountProject: 50,
          des: 'Solutions Developer'
        },
        {
          name: 'Giyuu Tomioka',
          email: 'giyuutomioka@kny.com',
          Created_Date: '10/2/2018',
          Project: 'Quasar Shopping',
          avatar: 'https://avatarfiles.alphacoders.com/203/203648.jpg',
          CountProject: 100,
          des: 'Solutions Developer'
        },
        {
          name: 'Netsuko Kamado',
          email: 'netsukokamado@kny.com',
          Created_Date: '10/2/2019',
          Project: 'Quasar QMarkdown',
          avatar: 'https://avatarfiles.alphacoders.com/203/203968.jpg',
          CountProject: 60,
          des: 'Solutions Developer'
        },
        {
          name: 'Kyojuro Rengoku',
          email: 'kyojurorengoku@kny.com',
          Created_Date: '10/1/2020',
          Project: 'Quasar QGrid',
          avatar: 'https://avatarfiles.alphacoders.com/216/216173.png',
          CountProject: 30,
          des: 'Solutions Developer'
        }
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
