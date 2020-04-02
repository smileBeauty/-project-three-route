Page({
  data: {
    options: ['近光灯', '远光灯', '远近光交替', '示廓灯+双闪'],
    questions: [
      { content: '通过路口', answer: '近光灯' },
      { content: '夜间同方向近距离跟车行驶', answer: '近光灯' },
      { content: '在窄路与非机动车回车', answer: '近光灯' },
      { content: '有路灯照明良好', answer: '近光灯' },
      { content: '进入无照明、照明不良的道路上行驶时', answer: '远光灯' },
      { content: '超车', answer: '远近光交替' },
      { content: '通过急弯', answer: '远近光交替' },
      { content: '通过坡道', answer: '远近光交替' },
      { content: '通过拱桥', answer: '远近光交替' },
      { content: '通过人行横道', answer: '远近光交替' },
      { content: '通过无红绿灯路口', answer: '远近光交替' },
      { content: '路边临时停车', answer: '示廓灯+双闪' }
    ],
    randomNumber: undefined,
    timerRef: undefined,
    timer: 5,
    result: ''
  },
  beginPractice () {
    this.setData({ result: '' })
    const randomNumber = parseInt(Math.random() * this.data.questions.length)
    this.setData({ randomNumber }, this.setTimerRef)
  },
  clearTimer () {
    clearTimeout(this.data.timerRef)
    this.setData({ timerRef: undefined, timer: 5 })
  },
  setTimerRef () {
    if (this.data.timerRef) {
      this.clearTimer()
    }
    const timerRef = setInterval(() => {
      if (this.data.timer === 0) {
        this.setData({ result: '超时错误点击此处测试下一题' })
        this.clearTimer()
      }
      this.setData({ timer: --this.data.timer })
    }, 1000)
    this.setData({ timerRef })
  },
  selectOption (event) {
    if (this.data.randomNumber === undefined) {
      return
    }
    if (event.target.id === this.data.questions[this.data.randomNumber].answer) {
      this.setData({ result: '答对了点击此处测试下一题' })
    } else {
      this.setData({ result: '答错了点击此处测试下一题' })
    }
    this.clearTimer()
  }
})