import { defineStore } from 'pinia'
import { date } from 'quasar'
import { api } from 'src/boot/axios'
import { formatDate } from 'src/boot/function'

export const resultlotteryStore = defineStore('resultlottery', {
  state: () => ({
    search: {
      date: date.formatDate(new Date(), 'YYYY/MM/DD'),
      typeId: null,
    },
    today: date.formatDate(new Date(), 'YYYY/MM/DD'),
    lottery5d: {},
    lottoRunner: null,
    tabSelected: '',
    activeSubTabs: '',
    timePrizes: {
      date: formatDate(new Date()),
      time: '00:00 AM',
      digit: 5,
      isRunning: false,
      runIndex: 0,
      results: [],
      posts: [
        { name: 'A', results: [] },
        { name: 'B', results: [] },
        { name: 'C', results: [] },
        { name: 'D', results: [] },
      ],
      prizes: [],
    },
    taps: [],
    result: [],
    resultloading: true,
    Loading: true,
    prizes: {
      amount5d: 0,
    },
  }),
  getters: {
    isRunning: (state) => {
      const lotteryKeys = ['lottery5d']
      const isAnylotteryRunning = lotteryKeys.some((key) => {
        const lottery = state[key]
        if (!lottery) return false
        return Array.isArray(lottery.posts)
          ? lottery.posts.some((x) => x.isRunning)
          : Array.isArray(lottery.posts)
            ? lottery.posts.some((x) => x.isRunning)
            : false
      })
      return isAnylotteryRunning
    },
    getTabs: (state) => {
      return state.result.map((obj) => {
        const running = false
        const times = obj?.times.map((item) => {
          if (item?.isRunning) {
            // running = false;
          }
          return {
            id: item.id,
            label: item?.time,
            value: item?.id,
          }
        })
        return {
          name: obj.name,
          time: times,
          id: obj.id,
          isRunning: running,
        }
      })
    },
  },

  actions: {
    getliveStatus(digit) {
      const resultlotteryMap = Object.fromEntries(
        [this.lottery5d].filter((obj) => obj && obj.digit).map((obj) => [obj.digit, obj]),
      )
      const result = resultlotteryMap[digit] ?? null
      return result.times?.some((time) => time.isRunning) || false
    },
    async getlotteryResults() {
      try {
        return api.get('/lottery/results', { params: this.search }).then((res) => {
          if (!res.data._isError) {
            this.result = res.data?.data ?? []
            const resultlotteryMap = this.result.reduce((acc, item) => {
              if ([5].includes(item.digit)) {
                acc[`lottery${item.digit}d`] = item
              }
              return acc
            }, {})
            this.lottery5d = resultlotteryMap.lottery5d || this.lottery5d
            this.Loading = false
            this.resultloading = false
          }
        })
      } catch (error) {
        console.log(error)
      }
    },
  },
})
